import { EventEmitter } from 'events';
import { ClientOptions, ClientEvents, EventStreamSubscription } from './types/client.options';
import { StreamManager } from './stream.manager';
import { PS2Environment } from '../types/ps2.options';
import { getFactory, GetMethod } from '../rest/getFactory';
import { CharacterManager } from './managers/character.manager';
import { Cache } from './utils/cache';
import { resolve } from '../rest/commands/resolve';
import { query } from '../rest/query';

declare interface Client {
    on<E extends keyof ClientEvents>(event: E, listener: (...data: ClientEvents[E]) => void): this;
    once<E extends keyof ClientEvents>(event: E, listener: (...data: ClientEvents[E]) => void): this;
}

class Client extends EventEmitter {
    /**
     * @type {PS2Environment} the environment the client is configured for
     */
    readonly environment: PS2Environment;

    /**
     * @type{StreamManager?} the event stream manager
     */
    private readonly streamManager: StreamManager;

    /**
     * @type {GetMethod} Get method to fetch data from the Rest API
     */
    readonly get: GetMethod;

    /**
     * @type {CharacterManager} The character manager for Census API requests
     */
    readonly characterManager: CharacterManager;

    /**
     * @param {string} serviceId service Id for the Census API
     * @param {ClientOptions} config
     */
    constructor(
        readonly serviceId: string,
        {
            environment = 'ps2',
            streamManagerConfig,
            characterManager = {},
        }: ClientOptions = {},
    ) {
        super();

        this.serviceId = serviceId;
        this.environment = environment;

        this.get = getFactory(environment, serviceId);

        this.streamManager = new StreamManager(this, streamManagerConfig);

        this.characterManager = new CharacterManager(
            this,
            characterManager?.cache ?? new Cache(),
            characterManager?.request ?? resolve(query('character'), ['outfit_member_extended']),
        );
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

export { Client };
