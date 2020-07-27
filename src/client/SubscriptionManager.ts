import { EventStreamSubscription } from './utils/Types';
import Client from './Client';
import EventStream from './EventStream';
import { Events } from './utils/Constants';

export class SubscriptionManager {
    private static readonly label = 'SubscriptionManager';

    /**
     * @type {Set<EventStreamSubscription>} All the current subscriptions
     */
    private readonly subscriptions: Set<EventStreamSubscription>;

    /**
     * @param {Client} client the client used to emit debug events
     * @param {EventStream} stream the stream to comment, like, and subscribe to
     * @param {Array<EventStreamSubscription>} subscriptions the initial subscriptions
     */
    public constructor(
        private readonly client: Client,
        private readonly stream: EventStream,
        subscriptions: Array<EventStreamSubscription> = [],
    ) {
        this.subscriptions = new Set(subscriptions);

        this.registerClientEvents();
    }

    /**
     * Registers important stream events
     */
    private registerClientEvents(): void {
        this.stream.on(Events.STREAM_READY, () => {
            this.client.emit(Events.DEBUG, `Subscribing to events`, SubscriptionManager.label);

            this.subscriptions.forEach(sub => this.stream.subscribe(sub));
        });
    }

    /**
     * Make a subscription to the stream
     *
     * @param {EventStreamSubscription} subscription
     * @return {EventStreamSubscription}
     */
    public subscribe(subscription: EventStreamSubscription): EventStreamSubscription {
        subscription = Object.freeze({...subscription});
        this.subscriptions.add(subscription);

        if (this.stream.isReady) {
            this.subscribe(subscription);
        }

        return subscription;
    }

    /**
     * Remove a subscription from the stream
     *
     * @param {EventStreamSubscription} subscription
     * @return {boolean}
     */
    public unsubscribe(subscription: EventStreamSubscription): boolean {
        if (!this.subscriptions.delete(subscription))
            return false;

        if (this.stream.isReady)
            this.stream.unsubscribe(subscription);

        return true;
    }

    /**
     * Purge all subscriptions
     */
    public unsubscribeAll(): void {
        this.subscriptions.clear();

        if (this.stream.isReady)
            this.stream.unsubscribeAll();
    }

    /**
     * Rerun all subscriptions
     *
     * @param {boolean} reset When true unsubscribes to all events first
     * @return {boolean} whether it has been run(depends on stream being ready)
     */
    public resubscribe(reset = false): boolean {
        if (this.stream.isReady) {
            if (reset)
                this.unsubscribeAll(); // TODO: Should probably wait until we hear back from the stream

            this.subscriptions.forEach(sub => this.stream.subscribe(sub));

            return true;
        }

        return false;
    }

    /**
     * Get current subscriptions
     *
     * @return {Array<EventStreamSubscription>}
     */
    public get currentSubscriptions(): Array<EventStreamSubscription> {
        return Array.from(this.subscriptions);
    }
}
