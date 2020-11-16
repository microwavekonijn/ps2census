import { Client } from './census.client';
import { EventStream } from './event.stream';
import { EventStreamManagerOptions, EventStreamSubscription } from './types/client.options';
import { Events } from './constants/client.constants';
import Timeout = NodeJS.Timeout;
import { StreamHandler } from './stream.handler';
import { DuplicateFilter } from './utils/duplicate-filter';
import { SubscriptionManager } from './subscription.manager';

export class StreamManager {
    private static readonly label = 'EventStreamManager';

    /**
     * The event stream
     */
    private readonly stream: EventStream;

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
    public readonly subscriptionManager: SubscriptionManager;

    /**
     * @type {StreamHandler} handles events, and subscriptions
     */
    private readonly handler: StreamHandler;

    /**
     * @param {Client} client
     * @param {EventStreamManagerOptions} config
     */
    public constructor(
        public readonly client: Client,
        {
            subscription = {},
            streamConfig,
        }: EventStreamManagerOptions = {},
    ) {
        this.handler = new StreamHandler(this.client, new DuplicateFilter());
        this.stream = new EventStream(this.client.serviceId, this.handler, {
            emitter: this.client,
            environment: this.client.environment,
            ...streamConfig,
        });
        this.subscriptionManager = new SubscriptionManager(this.client, this.stream, subscription);

        this.prepareEventStream();
    }

    /**
     *
     */
    private prepareEventStream(): void {
        /**
         * Stream closed
         */
        this.stream.on(Events.STREAM_CLOSE, (code, reason) => {
            if (this.destroyed) {
                this.client.emit(Events.STREAM_DISCONNECTED, code, reason);
                return;
            }

            this.client.emit(Events.STREAM_RECONNECTING);

            void this.reconnect();
        });

        /**
         * Stream destroyed without connection
         */
        this.stream.on(Events.STREAM_DESTROYED, () => {
            this.client.emit(Events.STREAM_RECONNECTING);

            void this.reconnect();
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

        this.client.emit(Events.DEBUG, `Manager disconnected.`, StreamManager.label);

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

            this.client.emit(Events.DEBUG, `Reconnect failed, trying again in ${this.reconnectDelay}ms.`, StreamManager.label);

            if (this.reconnectTimeout) clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = setTimeout(() => this.reconnect(), this.reconnectDelay);
        }
    }
}
