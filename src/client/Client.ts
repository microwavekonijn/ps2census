import { EventEmitter } from 'events';
import WebSocket, { Data } from 'ws';
import { PS2ClientConfig, PS2ClientSubscription, PS2Environment } from './utils/Types';
import Timeout = NodeJS.Timeout;
import DuplicateFilter from './utils/DuplicateFilter';
import {
    AchievementEarned,
    BattleRankUp, ContinentLock, ContinentUnlock,
    Death, FacilityControl,
    GainExperience,
    GenericEvent,
    ItemAdded, MetagameEvent,
    PlayerFacilityCapture, PlayerFacilityDefend, PlayerLogin, PlayerLogout, SkillAdded, VehicleDestroy,
} from './utils/PS2Events';
import { ClientEvents, State } from './utils/Contants';

declare interface Client {
    on(event: 'ready', listener: () => void): this;
    on(event: 'disconnected', listener: () => void): this;
    on(event: 'reconnecting', listener: () => void): this;
    on(event: 'error', listener: (e: any) => void): this;
    on(event: 'warn', listener: (e: any) => void): this;
    // on(event: 'debug', listener: () => void): this;
    on(event: 'event', listener: (event: GenericEvent) => void): this;
    on(event: 'duplicate', listener: (event: GenericEvent) => void): this;
    on(event: 'subscribed', listener: (subscription: GenericEvent) => void): this;

    on(event: 'AchievementEarned', listener: (event: AchievementEarned) => void): this;
    on(event: 'BattleRankUp', listener: (event: BattleRankUp) => void): this;
    on(event: 'Death', listener: (event: Death) => void): this;
    on(event: 'GainExperience', listener: (event: GainExperience) => void): this;
    on(event: 'ItemAdded', listener: (event: ItemAdded) => void): this;
    on(event: 'PlayerFacilityCapture', listener: (event: PlayerFacilityCapture) => void): this;
    on(event: 'PlayerFacilityDefend', listener: (event: PlayerFacilityDefend) => void): this;
    on(event: 'PlayerLogin', listener: (event: PlayerLogin) => void): this;
    on(event: 'PlayerLogout', listener: (event: PlayerLogout) => void): this;
    on(event: 'SkillAdded', listener: (event: SkillAdded) => void): this;
    on(event: 'VehicleDestroy', listener: (event: VehicleDestroy) => void): this;
    on(event: 'ContinentLock', listener: (event: ContinentLock) => void): this;
    // on(event: 'ContinentUnlock', listener: (event: ContinentUnlock)=> void):this;
    on(event: 'FacilityControl', listener: (event: FacilityControl) => void): this;
    on(event: 'MetagameEvent', listener: (event: MetagameEvent) => void): this;

    once(event: 'ready', listener: () => void): this;
    once(event: 'disconnected', listener: () => void): this;
    once(event: 'reconnecting', listener: () => void): this;
    once(event: 'error', listener: (e: any) => void): this;
    once(event: 'warn', listener: (e: any) => void): this;
    // once(event: 'debug', listener: () => void): this;
    once(event: 'event', listener: (event: GenericEvent) => void): this;
    once(event: 'duplicate', listener: (event: GenericEvent) => void): this;
    once(event: 'subscribed', listener: (subscription: GenericEvent) => void): this;

    once(event: 'AchievementEarned', listener: (event: AchievementEarned) => void): this;
    once(event: 'BattleRankUp', listener: (event: BattleRankUp) => void): this;
    once(event: 'Death', listener: (event: Death) => void): this;
    once(event: 'GainExperience', listener: (event: GainExperience) => void): this;
    once(event: 'ItemAdded', listener: (event: ItemAdded) => void): this;
    once(event: 'PlayerFacilityCapture', listener: (event: PlayerFacilityCapture) => void): this;
    once(event: 'PlayerFacilityDefend', listener: (event: PlayerFacilityDefend) => void): this;
    once(event: 'PlayerLogin', listener: (event: PlayerLogin) => void): this;
    once(event: 'PlayerLogout', listener: (event: PlayerLogout) => void): this;
    once(event: 'SkillAdded', listener: (event: SkillAdded) => void): this;
    once(event: 'VehicleDestroy', listener: (event: VehicleDestroy) => void): this;
    once(event: 'ContinentLock', listener: (event: ContinentLock) => void): this;
    // once(event: 'ContinentUnlock', listener: (event: ContinentUnlock)=> void):this;
    once(event: 'FacilityControl', listener: (event: FacilityControl) => void): this;
    once(event: 'MetagameEvent', listener: (event: MetagameEvent) => void): this;
}

class PS2EventClient extends EventEmitter {
    private static readonly baseUri = 'wss://push.planetside2.com/streaming';

    /**
     * @type {PS2Environment} The environment to watch
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
     * @type {State} client status
     */
    private status = State.IDLE;

    /**
     * @type {WebSocket?} Websocket client to PS2 event stream
     */
    private connection?: WebSocket;

    /**
     * @type {number} Unix time when client got connected
     */
    private connectedAt?: number;

    /**
     * @type {PS2ClientSubscription[]} Array of subscriptions
     */
    private subscriptions: Array<PS2ClientSubscription>;

    private readonly duplicateFilter?: DuplicateFilter;

    /**
     * @type {Function} Filter/recorder function to call to check duplicates
     */
        // eslint-disable-next-line @typescript-eslint/ban-types
    private readonly duplicateRecorder: Function;

    /**
     * @type {object} Map event names to ClientEvents
     */
    private readonly eventRoutes = new Map<string, ClientEvents>([
        ['AchievementEarned', ClientEvents.PS2_ACHIEVEMENT],
        ['BattleRankUp', ClientEvents.PS2_RANKUP],
        ['Death', ClientEvents.PS2_DEATH],
        ['GainExperience', ClientEvents.PS2_EXPERIENCE],
        ['ItemAdded', ClientEvents.PS2_ITEM],
        ['PlayerFacilityCapture', ClientEvents.PS2_CAPTURE],
        ['PlayerFacilityDefend', ClientEvents.PS2_DEFEND],
        ['PlayerLogin', ClientEvents.PS2_LOGIN],
        ['PlayerLogout', ClientEvents.PS2_LOGOUT],
        ['SkillAdded', ClientEvents.PS2_SKILL],
        ['VehicleDestroy', ClientEvents.PS2_VEHICLE_DESTROYED],
        ['ContinentLock', ClientEvents.PS2_CONTINENT],
        ['FacilityControl', ClientEvents.PS2_CONTROL],
        ['MetagameEvent', ClientEvents.PS2_META_EVENT],
    ]);

    /**
     * @param {string} serviceId Used to as authentication to connect to the gateway
     * @param {PS2ClientConfig} Client options
     */
    public constructor(
        private readonly serviceId: string,
        {
            environment = 'ps2',
            heartbeatInterval = 30000,
            subscriptions = [],
            duplicateFilter = new DuplicateFilter(),
        }: PS2ClientConfig = {},
    ) {
        super();

        this.environment = environment;
        this.subscriptions = subscriptions;
        this.heartbeatInterval = heartbeatInterval;

        if (duplicateFilter) {
            this.duplicateFilter = duplicateFilter;
            this.duplicateRecorder = (e: any) => duplicateFilter.record(e);
        } else {
            this.duplicateRecorder = () => true;
        }
    }

    /**
     * Connect to the PS2 event stream
     *
     * @return {Promise<void>}
     */
    public connect(): Promise<void> {
        if (this.connection && this.connection.readyState === WebSocket.OPEN && this.status === State.READY)
            return Promise.resolve();

        return new Promise((resolve, reject) => {

            const accept = () => {
                cleanup();
                resolve();

                this.subscribe();
            };

            const decline = (e?: any) => {
                cleanup();
                reject(e);
            };

            const cleanup = () => {
                this.removeListener(ClientEvents.CLIENT_READY, accept);
                this.removeListener(ClientEvents.CLIENT_DISCONNECTED, decline);
            };

            this.once(ClientEvents.CLIENT_READY, accept);
            this.once(ClientEvents.CLIENT_DISCONNECTED, decline);

            if (this.connection && this.connection.readyState === WebSocket.OPEN) {
                // TODO: Maybe test connection?
                this.emitReady();
                this.subscribe();
                return;
            }

            if (this.connection) {
                this.destroyConnection({emit: false});
            }

            this.status = this.status === State.DISCONNECTED ? State.RECONNECTING : State.CONNECTING;
            this.connectedAt = Date.now();

            const ws = this.connection = new WebSocket(this.gatewayUri);

            ws.on('open', this.onOpen.bind(this));
            ws.on('message', this.onMessage.bind(this));
            ws.on('close', this.onClose.bind(this));
            ws.on('error', this.onError.bind(this));
        });
    }

    /**
     * Closes the connection manually
     */
    public destroy(): void {
        this.destroyConnection();
    }

    /**
     * @return {string} Gateway to connect to
     */
    private get gatewayUri(): string {
        return `${PS2EventClient.baseUri}?environment=${this.environment}&service-id=s:${this.serviceId}`;
    }

    /**
     * client successfully connected
     */
    private onOpen(): void {
        this.status = State.NEARLY;
    }

    /**
     * Handles messages received from the gateway
     *
     * @param {WebSocket.Data} data
     */
    private onMessage(data: Data): void {
        if (typeof data !== 'string') {
            this.emit(ClientEvents.WARN, new TypeError(`Received data in unexpected format: ${data}`));
            return;
        }

        try {
            const parsed = JSON.parse(data);

            this.onPackage(parsed);
        } catch (e) {
            this.emit(ClientEvents.WARN, e);
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
                    data.connected ? this.emitReady() : this.destroyConnection();
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
                    // TODO: Together with the heartbeats, the statuses of servers can be monitored
                    break;
                case 'serviceMessage':
                    const eventRoute = this.eventRoutes.get(data.payload.event_name);
                    if (!eventRoute) throw new Error(`Received unkown game event: ${JSON.stringify(data)}`);

                    if (!this.duplicateRecorder(data.payload)) {
                        this.emit(ClientEvents.PS2_DUPLICATE, data.payload);
                    } else {
                        this.emit(ClientEvents.PS2_EVENT, data.payload);
                        this.emit(eventRoute, data.payload);
                    }

                    break;
                default:
                    throw new Error(`Received unknown event service: ${JSON.stringify(data)}`);
            }
        } else if (data.subscription) {
            this.emit(ClientEvents.PS2_SUBSCRIBED, data.subscription);
        } else if (data['send this for help']) {
            // Beep beep
        } else {
            throw new Error(`Received unknown package: ${JSON.stringify(data)}`);
        }
    }

    /**
     * Connection closed by server
     */
    private onClose(): void {
        this.setHeartbeatTimer(-1);
        this.cleanupConnection();

        this.status = State.DISCONNECTED;
        this.emit(ClientEvents.CLIENT_DISCONNECTED);
    }

    /**
     * Relays error from the websocket connection to the client
     *
     * @param {Error} error
     */
    private onError(error: Error): void {
        this.emit(ClientEvents.ERROR, error);
    }

    /**
     * If a connection exists cleanup listeners
     */
    private cleanupConnection(): void {
        this.connection?.removeAllListeners();
    }

    /**
     * Helper that destroys a connection forcefully
     *
     * @param {number} code
     * @param {boolean} emit
     */
    private destroyConnection({code = 1000, emit = true} = {}): void {
        this.setHeartbeatTimer(-1);

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

                if (emit) this.emit(ClientEvents.CLIENT_DISCONNECTED);
            }

            this.connection = undefined;

        } else if (emit) {
            if (emit) this.emit(ClientEvents.CLIENT_DISCONNECTED);
        }

        this.status = State.DISCONNECTED;
    }

    /**
     * Destroys current connection and tries to reestablish a new connection
     */
    private async reconnect(): Promise<void> {
        this.destroyConnection({emit: false});
        this.emit(ClientEvents.CLIENT_RECONNECTING);

        try {
            await this.connect();
        } catch (e) {
            this.emit(ClientEvents.ERROR, e);
        }
    }

    /**
     * Helper that makes the client ready
     */
    private emitReady(): void {
        this.emit(ClientEvents.CLIENT_READY);
        this.status = State.READY;
    }

    /**
     * Manages the heartbeat timer
     *
     * @param {number} interval Negative value will remove the timer
     */
    private setHeartbeatTimer(interval: number): void {
        if (interval < 0) {
            if (this.heartbeatTimer) {
                clearInterval(this.heartbeatTimer);
                this.heartbeatTimer = undefined;
            }
            return;
        }

        if (this.heartbeatTimer) clearInterval(this.heartbeatTimer);

        this.heartbeatTimer = setInterval(() => this.resetHeartbeat(), this.heartbeatInterval);
    }

    /**
     * Checks if the heartbeat has been acknowledged and resets the heartbeat
     */
    private resetHeartbeat(): void {
        if (!this.heartbeatAcknowledged) {
            // Zombie connection, try to reconnect
            this.reconnect();
            return;
        }

        this.heartbeatAcknowledged = false;
    }

    /**
     * Acknowledges a heartbeat send from the gateway
     *
     * @param payload
     */
    private acknowledgeHeartbeat(payload: any): void {
        this.heartbeatAcknowledged = true;
        this.lastHeartbeat = Date.now();
        // Handle payload
    }

    /**
     * Subscriptions to make once connected
     */
    private subscribe(): void {
        this.subscriptions.forEach((sub) => {
            this.subscribeTo(sub);
        });
    }

    /**
     * Subscribe to
     * @param {PS2ClientSubscription} sub
     */
    private subscribeTo(sub: PS2ClientSubscription): void {
        this.connection!.send(JSON.stringify({
            service: 'event',
            action: 'subscribe',
            ...sub,
        }));
    }
}

export default PS2EventClient;
