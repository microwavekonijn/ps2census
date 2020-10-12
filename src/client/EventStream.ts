import { EventEmitter } from 'events';
import WebSocket, { Data } from 'ws';
import Timeout = NodeJS.Timeout;
import { EventStreamConfig, EventStreamSubscribed, EventStreamSubscription } from './types/Client';
import { Events, State } from './constants/Client';
import { EventStreamHandler } from './concerns/EventStreamHandler';
import { PS2Environment } from '../types/PS2';

declare interface EventStream {
    on(event: 'ready', listener: () => void): this;
    on(event: 'destroyed', listener: () => void): this;
    on(event: 'close', listener: (code: number, reason: string) => void): this;
    on(event: 'error', listener: (e: Error) => void): this;
    on(event: 'warn', listener: (e: Error) => void): this;
    on(event: 'debug', listener: (info: string, label: string) => void): this;

    once(event: 'ready', listener: () => void): this;
    once(event: 'destroyed', listener: () => void): this;
    once(event: 'close', listener: (code: number, reason: string) => void): this;
    once(event: 'error', listener: (e: Error) => void): this;
    once(event: 'warn', listener: (e: Error) => void): this;
    once(event: 'debug', listener: (info: string, label: string) => void): this;
}

class EventStream extends EventEmitter {
    private static readonly label = 'EventStream';

    private static readonly baseUri = 'wss://push.planetside2.com/streaming';

    /**
     * The environment to stream
     */
    private readonly environment: PS2Environment;

    /**
     * @type {number} Period of the heartbeat in milliseconds
     */
    private readonly heartbeatInterval: number;

    /**
     * @type {Timeout?} Interval at which the heartbeat is reset
     */
    private heartbeatTimer?: Timeout;

    /**
     * @type {boolean} Whether a heartbeat was send by the websocket
     */
    private heartbeatAcknowledged = false;

    /**
     * @type {number?} Unix time when last heartbeat was send
     */
    private lastHeartbeat?: number;

    /**
     * @type {State} client state
     */
    private state = State.IDLE;

    /**
     * @type {WebSocket?} Websocket client to PS2 event stream
     */
    private connection?: WebSocket;

    /**
     * @type {number} Unix time when client got connected
     */
    private connectedAt?: number;

    /**
     * @type {Timeout?} Timeout to make sure the connection is established within a reasonable time
     */
    private connectionTimeout?: Timeout;

    /**
     * Timeout time for when we waited long enough
     */
    private readonly connectionTimeoutTime: number;

    /**
     * The emitter used for events like debug, warn, and error
     */
    private readonly emitter: EventEmitter;

    /**
     * Queue that contains handlers for subscription response from the event stream
     */
    private readonly subscriptionResponseQueue = new Set<(subscription: EventStreamSubscribed) => void>();

    /**
     * @param serviceId
     * @param {EventStreamHandler} handler
     * @param {EventStreamConfig} config
     */
    public constructor(
        private readonly serviceId: string,
        private readonly handler: EventStreamHandler,
        {
            connectionTimeout = 20000,
            heartbeatInterval = 30000,
            emitter,
            environment = 'ps2',
        }: EventStreamConfig = {},
    ) {
        super();

        this.environment = environment;
        this.emitter = emitter ?? this;
        this.heartbeatInterval = heartbeatInterval;
        this.connectionTimeoutTime = connectionTimeout;
    }

    /**
     * Maybe, is ready, maybe is not, who knows
     */
    public get isReady(): boolean {
        return this.state === State.READY;
    }

    /**
     * Connect to the PS2 event stream
     *
     * @return {Promise<void>}
     */
    public connect(): Promise<void> {
        if (this.connection && this.connection.readyState === WebSocket.OPEN && this.state === State.READY)
            return Promise.resolve();

        return new Promise((resolve, reject) => {

            const accept = () => {
                cleanup();
                resolve();
            };

            const decline = (...e: any[]) => {
                cleanup();
                reject(e);
            };

            const cleanup = () => {
                this.removeListener(Events.STREAM_READY, accept);
                this.removeListener(Events.STREAM_DESTROYED, decline);
                this.removeListener(Events.STREAM_CLOSE, decline);
            };

            this.once(Events.STREAM_READY, accept);
            this.once(Events.STREAM_DESTROYED, decline);
            this.once(Events.STREAM_CLOSE, decline);

            if (this.connection && this.connection.readyState === WebSocket.OPEN) {
                this.emitter.emit(Events.DEBUG, `Open connection found, continuing operations.`, EventStream.label);

                // Assume everything is fine
                this.state = State.READY;
                this.emit(Events.STREAM_READY);

                return;
            }

            if (this.connection) {
                this.emitter.emit(Events.DEBUG, `Connection found, destroying connection.`, EventStream.label);
                this.destroy({emit: false});
            }

            this.emitter.emit(Events.DEBUG, `Connecting.`, EventStream.label);

            this.state = this.state === State.DISCONNECTED ? State.RECONNECTING : State.CONNECTING;
            this.connectedAt = Date.now();
            this.setConnectionTimeout(true);

            const ws = this.connection = new WebSocket(this.gatewayUri);

            ws.on('open', this.onOpen.bind(this));
            ws.on('message', this.onMessage.bind(this));
            ws.on('close', this.onClose.bind(this));
            ws.on('error', this.onError.bind(this));
        });
    }

    /**
     * @return {string} Gateway to connect to
     */
    private get gatewayUri(): string {
        return `${EventStream.baseUri}?environment=${this.environment}&service-id=s:${this.serviceId}`;
    }

    /**
     * client successfully connected
     */
    private onOpen(): void {
        this.emitter.emit(Events.DEBUG, `Connected.`, EventStream.label);
        this.state = State.NEARLY;
    }

    /**
     * Handles messages received from the gateway
     *
     * @param {WebSocket.Data} data
     */
    private onMessage(data: Data): void {
        if (typeof data !== 'string') {
            this.emitter.emit(Events.WARN, new TypeError(`Received data in unexpected format: ${data}`));
            return;
        }

        try {
            const parsed = JSON.parse(data);

            this.onPackage(parsed);
        } catch (e) {
            this.emitter.emit(Events.WARN, e);
        }
    }

    /**
     * Handles the data received
     *
     * @param data
     */
    private onPackage(data: any): void {
        if (data.service === 'push') {
            switch (data.type) {
                case 'connectionStateChanged':
                    if (data.connected) {
                        this.state = State.READY;
                        this.emit(Events.STREAM_READY);
                        this.setConnectionTimeout(false);
                        this.setHeartbeatTimer(this.heartbeatInterval);
                    } else {
                        this.destroy();
                    }
                    break;
                default:
                    throw new Error(`Received unknown push service: ${JSON.stringify(data)}`);
            }
        } else if (data.service === 'event') {
            switch (data.type) {
                case 'heartbeat':
                    this.acknowledgeHeartbeat(data.online);
                    break;
                case 'serviceStateChanged':
                    this.handler.handleServerStateChanged(data);
                    break;
                case 'serviceMessage':
                    this.handler.handleEvent(data.payload);
                    break;
                default:
                    throw new Error(`Received unknown event service: ${JSON.stringify(data)}`);
            }
        } else if (data.subscription) {
            this.handleSubscription(data.subscription);
            this.handler.handleSubscription(data.subscription);
        } else if (data['send this for help']) {
            // Beep beep
        } else {
            throw new Error(`Received unknown package: ${JSON.stringify(data)}`);
        }
    }

    /**
     * Connection closed by server
     */
    private onClose(code: number, reason: string): void {
        this.emitter.emit(Events.DEBUG, `Connection closed. ${JSON.stringify({code, reason})}`, EventStream.label);

        this.setHeartbeatTimer(-1);
        this.setConnectionTimeout(false);
        this.cleanupConnection();

        this.state = State.DISCONNECTED;
        this.emit(Events.STREAM_CLOSE, code, reason);
    }

    /**
     * Relays error from the websocket connection to the client
     *
     * @param {Error} error
     */
    private onError(error: Error): void {
        this.emitter.emit(Events.ERROR, error);
    }

    /**
     * If a connection exists cleanup listeners
     */
    private cleanupConnection(): void {
        this.connection?.removeAllListeners();
    }

    /**
     * Destroys a connection forcefully
     *
     * @param {number} code
     * @param {boolean} emit
     */
    public destroy({code = 1000, emit = true} = {}): void {
        this.setHeartbeatTimer(-1);
        this.setConnectionTimeout(false);

        if (this.connection) {
            if (this.connection.readyState === WebSocket.OPEN) {
                this.connection.close(code);
            } else {
                this.cleanupConnection();

                try {
                    this.connection.close(code);
                } catch {
                    // Beep beep
                }

                if (emit) this.emit(Events.STREAM_DESTROYED);
            }

            this.connection = undefined;

        } else if (emit) {
            if (emit) this.emit(Events.STREAM_DESTROYED);
        }

        this.state = State.DISCONNECTED;
    }

    /**
     * Toggle connection timeout
     *
     * @param {boolean} toggle
     */
    private setConnectionTimeout(toggle: boolean): void {
        if (!toggle) {
            if (this.connectionTimeout) {
                this.emitter.emit(Events.DEBUG, `Connection timeout cleared`, EventStream.label);
                clearTimeout(this.connectionTimeout);
                delete this.connectionTimeout;
            }
            return;
        }

        this.emitter.emit(Events.DEBUG, `Connection timeout set`, EventStream.label);
        this.connectionTimeout = setTimeout(() => {
            this.emitter.emit(Events.DEBUG, `Connection timed out.`, EventStream.label);
            this.destroy({code: 1001});
        }, this.connectionTimeoutTime);
    }

    /**
     * Manages the heartbeat timer
     *
     * @param {number} interval Negative value will forget the timer
     */
    private setHeartbeatTimer(interval: number): void {
        if (interval < 0) {
            if (this.heartbeatTimer) {
                this.emitter.emit(Events.DEBUG, `Clearing heartbeat interval.`, EventStream.label);

                clearInterval(this.heartbeatTimer);
                delete this.heartbeatTimer;
            }
            return;
        }

        this.emitter.emit(Events.DEBUG, `Setting heartbeat interval(${interval}ms).`, EventStream.label);

        if (this.heartbeatTimer) clearInterval(this.heartbeatTimer);

        this.heartbeatTimer = setInterval(() => this.resetHeartbeat(), this.heartbeatInterval);
    }

    /**
     * Checks if the heartbeat has been acknowledged and resets the heartbeat
     */
    private resetHeartbeat(): void {
        if (!this.heartbeatAcknowledged) {
            this.emitter.emit(Events.DEBUG, `Heartbeat not been received, assume connection has gone bad.`, EventStream.label);
            this.destroy({code: 1001});
            return;
        }

        this.emitter.emit(Events.DEBUG, `Reset heartbeat acknowledgement.`, EventStream.label);

        this.heartbeatAcknowledged = false;
    }

    /**
     * Acknowledges a heartbeat send from the gateway
     *
     * @param payload
     */
    private acknowledgeHeartbeat(payload: any): void {
        this.emitter.emit(Events.DEBUG, `Heartbeat acknowledged.`, EventStream.label);

        this.heartbeatAcknowledged = true;
        this.lastHeartbeat = Date.now();
    }

    /**
     * Make a subscription to the stream
     *
     * @param {EventStreamSubscription} subscription
     */
    public subscribe({characters, worlds, eventNames, logicalAndCharactersWithWorlds}: EventStreamSubscription): Promise<EventStreamSubscribed> {
        return this.updateSubscription({
            service: 'event',
            action: 'subscribe',
            characters,
            worlds,
            eventNames,
            logicalAndCharactersWithWorlds,
        });
    }

    /**
     * Remove a subscription from the stream
     *
     * @param {EventStreamSubscription} subscription
     */
    public unsubscribe({characters, worlds, eventNames, logicalAndCharactersWithWorlds}: EventStreamSubscription): Promise<EventStreamSubscribed> {
        return this.updateSubscription({
            service: 'event',
            action: 'clearSubscribe',
            characters,
            worlds,
            eventNames,
            logicalAndCharactersWithWorlds,
        });
    }

    /**
     * Purge all subscriptions
     */
    public unsubscribeAll(): Promise<EventStreamSubscribed> {
        return this.updateSubscription({
            service: 'event',
            action: 'clearSubscribe',
            all: 'true',
        });
    }

    /**
     * Handles incoming subscriptions so they can resolve a promise
     * Note: The assumption is made that the messages are send in order
     *
     * @param {EventStreamSubscribed} subscription
     * @private
     */
    private handleSubscription(subscription: EventStreamSubscribed): void {
        const [resolver] = this.subscriptionResponseQueue;

        if (resolver) {
            this.subscriptionResponseQueue.delete(resolver);

            resolver(subscription);
        }
    }

    /**
     * Update the event stream subscription
     *
     * @param {Record<string, string | number | string[]>} eventMessage
     * @return {Promise<EventStreamSubscribed>}
     * @private
     */
    private updateSubscription(eventMessage: Record<string, any>): Promise<EventStreamSubscribed> {
        return new Promise((resolve, reject) => {
            if (!this.isReady)
                reject(new Error('Unable to update subscription to stream as it is closed'));

            const closed = () => {
                this.subscriptionResponseQueue.delete(success);
                reject(new Error('Unable to update subscription to stream as it closed'));
            };

            const success = (subscription: EventStreamSubscribed) => {
                this.off(Events.STREAM_CLOSE, closed);
                resolve(subscription);
            };

            this.once(Events.STREAM_CLOSE, closed);

            this.subscriptionResponseQueue.add(success);

            this.send(JSON.stringify(eventMessage));
        });
    }

    /**
     * @param data
     */
    public send(data: any): void {
        if (!this.connection) throw new Error(`Connection not available`);

        this.connection.send(data, (e) => {
            if (e) this.emitter.emit(Events.ERROR, e);
        });
    }
}

export { EventStream };
