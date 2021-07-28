import {EventEmitter} from '../utils/events';
import {EventStreamManagerOptions, StreamManager} from './stream.manager';
import {PS2Environment} from '../types/ps2.options';
import {EventStreamSubscription} from './types/event-stream-subscription';
import {ClientEvents} from './types/client.events';
import {RestClient, RestOptions} from '../rest';
import {CharacterManager, CharacterManagerOptions} from './managers';

export interface ClientOptions {
    streamManager?: EventStreamManagerOptions;
    rest?: Omit<RestOptions, 'serviceId'>,
    characterManager?: CharacterManagerOptions;
}

export class CensusClient extends EventEmitter<ClientEvents> {
    /**
     * @type{StreamManager?} the event stream manager
     */
    private readonly streamManager: StreamManager;

    /**
     * @type {RestClient} Client to fetch data from the Rest API
     */
    readonly rest: RestClient;

    /**
     * @type {CharacterManager} The character manager for Census API requests
     */
    readonly characterManager: CharacterManager;

    /**
     * @param {string} serviceId service Id for the Census API
     * @param {PS2Environment} environment the environment the client is configured for
     * @param {ClientOptions} config
     */
    constructor(
        readonly serviceId: string,
        readonly environment: PS2Environment,
        {
            streamManager,
            rest,
            characterManager,
        }: ClientOptions = {},
    ) {
        super();

        this.serviceId = serviceId;

        this.rest = new RestClient({serviceId, ...rest});

        this.characterManager = new CharacterManager(this, characterManager,);

        this.streamManager = new StreamManager(this, streamManager);
    }

    /**
     * Start watching the event stream
     *
     * @return {Promise<void>}
     */
    async watch(): Promise<void> {
        await this.streamManager.connect();
    }

    /**
     * Doom and destruction, WUHAHAHAHA!
     */
    destroy(): void {
        this.streamManager?.disconnect();
    }

    /**
     * Make a subscription to the stream
     *
     * @param {EventStreamSubscription} subscription
     * @return {Promise<boolean>} whether it has been run(depends on stream being ready)
     */
    subscribe(subscription: EventStreamSubscription): Promise<boolean> {
        return this.streamManager.subscriptionManager.subscribe(subscription);
    }

    /**
     * Remove a subscription from the stream
     *
     * @param {EventStreamSubscription} subscription
     * @return {Promise<boolean>} whether it has been run(depends on stream being ready)
     */
    unsubscribe(subscription: EventStreamSubscription): Promise<boolean> {
        return this.streamManager.subscriptionManager.unsubscribe(subscription);
    }

    /**
     * Purge all subscriptions
     *
     * @return {Promise<boolean>} whether it has been run(depends on stream being ready)
     */
    unsubscribeAll(): Promise<boolean> {
        return this.streamManager.subscriptionManager.unsubscribeAll();
    }

    /**
     * Rerun all subscriptions
     *
     * @param {boolean} reset When true unsubscribes to all events first
     * @return {Promise<boolean>} whether it has been run(depends on stream being ready)
     */
    resubscribe(reset = false): Promise<boolean> {
        return this.streamManager.subscriptionManager.resubscribe(reset);
    }

    /**
     * Get the current subscription
     *
     * @return {EventStreamSubscription}
     */
    get subscription(): EventStreamSubscription {
        return this.streamManager.subscriptionManager.subscription;
    }
}
