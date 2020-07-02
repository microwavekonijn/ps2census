import { EventEmitter } from 'events';
import Client from './Client';
import EventStream from './EventStream';
import { EventStreamSubscription } from './utils/Types';
import { Events } from './utils/Contants';
import { GenericEvent } from './utils/PS2Events';
import Timeout = NodeJS.Timeout;
import FacilityControl from './events/FacilityControl';

declare interface EventStreamManager {
    on(event: 'ready', listener: () => void): this;
    on(event: 'disconnected', listener: (code: number, reason: string) => void): this;
    on(event: 'reconnecting', listener: () => void): this;
    on(event: 'error', listener: (e: Error) => void): this;
    on(event: 'warn', listener: (e: Error) => void): this;
    on(event: 'debug', listener: (info: string) => void): this;

    once(event: 'ready', listener: () => void): this;
    once(event: 'disconnected', listener: (code: number, reason: string) => void): this;
    once(event: 'reconnecting', listener: () => void): this;
    once(event: 'error', listener: (e: Error) => void): this;
    once(event: 'warn', listener: (e: Error) => void): this;
    once(event: 'debug', listener: (info: string) => void): this;
}

class EventStreamManager extends EventEmitter {
    /**
     *
     */
    private stream: EventStream;

    /**
     * @type {boolean}
     */
    private destroyed = false;

    /**
     * @type {number}
     */
    private reconnectDelay = 1000;

    /**
     *
     */
    private reconnectTimeout?: Timeout;

    private readonly emitter: EventEmitter;

    /**
     *
     */
    private readonly dataEmitter: EventEmitter;

    /**
     * @type {EventStreamSubscription[]} Array of subscriptions
     */
    private subscriptions: EventStreamSubscription[];

    /**
     * @type {object} Map event names to Events
     */
    private readonly eventRoutes = new Map<string, Events>([
        ['AchievementEarned', Events.PS2_ACHIEVEMENT],
        ['BattleRankUp', Events.PS2_RANKUP],
        ['Death', Events.PS2_DEATH],
        ['GainExperience', Events.PS2_EXPERIENCE],
        ['ItemAdded', Events.PS2_ITEM],
        ['PlayerFacilityCapture', Events.PS2_CAPTURE],
        ['PlayerFacilityDefend', Events.PS2_DEFEND],
        ['PlayerLogin', Events.PS2_LOGIN],
        ['PlayerLogout', Events.PS2_LOGOUT],
        ['SkillAdded', Events.PS2_SKILL],
        ['VehicleDestroy', Events.PS2_VEHICLE_DESTROYED],
        ['ContinentLock', Events.PS2_CONTINENT],
        ['FacilityControl', Events.PS2_CONTROL],
        ['MetagameEvent', Events.PS2_META_EVENT],
    ]);

    /**
     *
     * @param {Client} client
     * @param {any} config
     */
    public constructor(
        public readonly client: Client,
        {
            subscriptions = [],
            emitter,
            dataEmitter,
        }: any = {},
    ) {
        super();

        this.dataEmitter = dataEmitter ?? this.client;
        this.subscriptions = subscriptions;
        this.stream = new EventStream(this, {emitter});

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
            this.emit(Events.DEBUG, `Subscribing.`);

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
                this.emit(Events.STREAM_DISCONNECTED, code, reason);
                return;
            }

            this.emit(Events.STREAM_RECONNECTING);

            this.reconnect();
        });

        /**
         * Stream destroyed without connection
         */
        this.stream.on(Events.STREAM_DESTROYED, () => {
            this.emit(Events.STREAM_RECONNECTING);

            this.reconnect();
        });
    }

    /**
     *
     * @return {Promise<void>}
     */
    public async connect(): Promise<void> {
        if (this.stream.isReady) return;

        const ready = () => {
            this.emit(Events.STREAM_READY);
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
     *
     * @return {Promise<void>}
     */
    public disconnect(): void {
        if (this.destroyed) return;

        this.emit(Events.DEBUG, `Manager disconnected.`);

        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout);
            delete this.reconnectTimeout;
        }

        this.stream.destroy({code: 1000, emit: false});

        this.emit(Events.STREAM_DISCONNECTED);
    }

    /**
     *
     */
    private async reconnect(): Promise<void> {
        try {
            await this.stream.connect();
        } catch (e) {
            if ([403].includes(e.httpState)) {

                this.emit(Events.ERROR, new Error(`Service ID rejected while trying to reconnect.`));
                this.disconnect();

                return;
            }

            this.emit(Events.DEBUG, `Reconnect failed, trying again in ${this.reconnectDelay}ms.`);

            if (this.reconnectTimeout) clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = setTimeout(() => this.reconnect(), this.reconnectDelay);
        }
    }

    /**
     *
     * @param {GenericEvent} event
     */
    public handleEvent(event: GenericEvent): void {
        // TODO: write code
    }
}

export default EventStreamManager;
