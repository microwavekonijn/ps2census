import { EventEmitter } from 'events';
import Client from './Client';
import EventStream from './EventStream';
import { EventStreamManagerConfig, EventStreamSubscription } from './utils/Types';
import { Events } from './utils/Constants';
import Timeout = NodeJS.Timeout;
import EventStreamHandler from './EventStreamHandler';
import DuplicateFilter from './utils/DuplicateFilter';

class EventStreamManager extends EventEmitter {
    /**
     * The event stream
     */
    private stream: EventStream;

    /**
     * @type {boolean} wheter the connection has been destroyed
     */
    private destroyed = false;

    /**
     * @type {number} delay before trying to reconnect
     */
    private reconnectDelay = 2000;

    /**
     * @type {Timeout?} The reconnect timeout
     */
    private reconnectTimeout?: Timeout;

    /**
     * @type {EventStreamSubscription[]} Array of subscriptions
     */
    private subscriptions: EventStreamSubscription[];

    /**
     * @type {EventStreamHandler} handles events, and subscriptions
     */
    private readonly handler: EventStreamHandler;

    /**
     * @param {Client} client
     * @param {EventStreamManagerConfig} config
     */
    public constructor(
        public readonly client: Client,
        {
            subscriptions = [],
            streamConfig,
        }: EventStreamManagerConfig = {},
    ) {
        super();

        if (!this.client.serviceId)
            throw new Error('A service ID is required to connect to the Event Stream');

        this.subscriptions = subscriptions;
        this.handler = new EventStreamHandler(this.client, new DuplicateFilter());
        this.stream = new EventStream(this.client.serviceId, this.handler, {
            emitter: this,
            environment: this.client.environment,
            ...streamConfig,
        });

        this.prepareEventStream();
    }

    /**
     *
     */
    private prepareEventStream(): void {
        /**
         * Stream ready
         */
        this.stream.on(Events.STREAM_READY, () => {
            this.client.emit(Events.DEBUG, `Subscribing.`);

            this.subscriptions.forEach((sub) => this.stream.send(JSON.stringify({
                service: 'event',
                action: 'subscribe',
                ...sub,
            })));
        });

        /**
         * Stream closed
         */
        this.stream.on(Events.STREAM_CLOSE, (code, reason) => {
            if (this.destroyed) {
                this.client.emit(Events.STREAM_DISCONNECTED, code, reason);
                return;
            }

            this.client.emit(Events.STREAM_RECONNECTING);

            this.reconnect();
        });

        /**
         * Stream destroyed without connection
         */
        this.stream.on(Events.STREAM_DESTROYED, () => {
            this.client.emit(Events.STREAM_RECONNECTING);

            this.reconnect();
        });
    }

    /**
     * Start connection
     *
     * @return {Promise<void>}
     */
    public async connect(): Promise<void> {
        if (this.stream.isReady) return;

        const ready = () => {
            this.client.emit(Events.STREAM_READY);
        };

        this.stream.once(Events.STREAM_READY, ready);

        try {
            await this.stream.connect();
        } catch (e) {
            this.stream.removeListener(Events.STREAM_READY, ready);

            if ([403].includes(e.httpState)) {
                throw new Error(`Service ID rejected.`);
            } else {
                throw e;
            }
        }
    }

    /**
     * Bye bye
     *
     * @return {Promise<void>}
     */
    public disconnect(): void {
        if (this.destroyed) return;
        this.destroyed = true;

        this.client.emit(Events.DEBUG, `Manager disconnected.`);

        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout);
            delete this.reconnectTimeout;
        }

        this.stream.destroy({code: 1000, emit: false});
    }

    /**
     * Connection has done something, now we need a new one
     */
    private async reconnect(): Promise<void> {
        try {
            await this.stream.connect();
        } catch (e) {
            if ([403].includes(e.httpState)) {

                this.client.emit(Events.ERROR, new Error(`Service ID rejected while trying to reconnect.`));
                this.disconnect();

                return;
            }

            this.client.emit(Events.DEBUG, `Reconnect failed, trying again in ${this.reconnectDelay}ms.`);

            if (this.reconnectTimeout) clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = setTimeout(() => this.reconnect(), this.reconnectDelay);
        }
    }
}

export default EventStreamManager;
