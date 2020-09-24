import { EventStreamSubscription } from './utils/Types';
import Client from './Client';
import EventStream from './EventStream';
import { Events } from './utils/Constants';
import { PS2EventNames } from './utils/PS2Events';

export default class SubscriptionManager {
    private static readonly label = 'SubscriptionManager';

    private readonly characters: Set<string>;

    private readonly worlds: Set<string>;

    private readonly eventNames: Set<'all' | PS2EventNames>;

    private logicalAndCharactersWithWorlds: boolean;

    /**
     * @param {Client} client the client used to emit debug events
     * @param {EventStream} stream the stream to comment, like, and subscribe to
     * @param {EventStreamSubscription} subscription the initial subscription
     */
    public constructor(
        private readonly client: Client,
        private readonly stream: EventStream,
        subscription: EventStreamSubscription = {},
    ) {
        this.characters = new Set(subscription.characters);
        this.worlds = new Set(subscription.worlds);
        this.eventNames = new Set(subscription.eventNames);
        this.logicalAndCharactersWithWorlds = subscription.logicalAndCharactersWithWorlds ?? false;

        this.registerClientEvents();
    }

    /**
     * Registers important stream events
     */
    private registerClientEvents(): void {
        this.stream.on(Events.STREAM_READY, () => {
            this.client.emit(Events.DEBUG, `Subscribing to events`, SubscriptionManager.label);

            this.stream.subscribe(this.subscription);
        });
    }

    /**
     * Make a subscription to the stream
     *
     * @param {EventStreamSubscription} subscription
     * @return {EventStreamSubscription}
     */
    public subscribe(subscription: EventStreamSubscription): EventStreamSubscription {
        subscription.characters?.forEach(this.characters.add);
        subscription.worlds?.forEach(this.worlds.add);
        subscription.eventNames?.forEach(this.eventNames.add);

        if (this.stream.isReady)
            this.subscribe(subscription);

        return this.subscription;
    }

    /**
     * Remove a subscription from the stream
     *
     * @param {EventStreamSubscription} subscription
     * @return {boolean}
     */
    public unsubscribe(subscription: EventStreamSubscription): void {
        subscription.characters?.forEach(this.characters.delete);
        subscription.worlds?.forEach(this.worlds.delete);
        subscription.eventNames?.forEach(this.eventNames.delete);

        if (subscription.logicalAndCharactersWithWorlds)
            this.logicalAndCharactersWithWorlds = subscription.logicalAndCharactersWithWorlds;

        if (this.stream.isReady)
            this.stream.unsubscribe(subscription);
    }

    /**
     * Purge all subscriptions
     */
    public unsubscribeAll(): void {
        this.characters.clear();
        this.worlds.clear();
        this.eventNames.clear();
        this.logicalAndCharactersWithWorlds = false;

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
                this.unsubscribeAll();

            this.stream.subscribe(this.subscription);

            return true;
        }

        return false;
    }

    /**
     * Get current subscription
     *
     * @return {EventStreamSubscription}
     */
    public get subscription(): EventStreamSubscription {
        return {
            characters: Array.from(this.characters),
            worlds: Array.from(this.worlds),
            eventNames: Array.from(this.eventNames),
            logicalAndCharactersWithWorlds: this.logicalAndCharactersWithWorlds,
        };
    }
}
