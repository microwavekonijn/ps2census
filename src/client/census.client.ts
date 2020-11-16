import { EventEmitter } from 'events';
import { ClientOptions, ClientEvents, EventStreamSubscription } from './types/client.options';
import { StreamManager } from './stream.manager';
import { PS2Environment } from '../types/ps2.options';
import { getFactory } from '../rest';
import { getMethod } from '../rest/types/request';
import { CharacterManager } from './managers/character.manager';
import { Cache } from './utils/cache';
import { character } from '../rest/collections/character';
import { resolve } from '../rest/commands/resolve';

declare interface Client {
    on<E extends keyof ClientEvents>(event: E, listener: (...data: ClientEvents[E]) => void): this;
    once<E extends keyof ClientEvents>(event: E, listener: (...data: ClientEvents[E]) => void): this;
}

class Client extends EventEmitter {
    /**
     * @type {PS2Environment} the environment the client is configured for
     */
    public readonly environment: PS2Environment;

    /**
     * @type{StreamManager?} the event stream manager
     */
    private readonly streamManager: StreamManager;

    /**
     * @type {getMethod} Get method to fetch data from the Rest API
     */
    public readonly get: getMethod;

    /**
     * @type {CharacterManager} The character manager for Census API requests
     */
    public readonly characterManager: CharacterManager;

    /**
     * @param {string} serviceId service Id for the Census API
     * @param {ClientOptions} config
     */
    public constructor(
        public readonly serviceId: string,
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
            characterManager?.request ?? resolve(character, ['outfit_member_extended']),
        );
    }

    /**
     * Start watching the event stream
     *
     * @return {Promise<void>}
     */
    public async watch(): Promise<void> {
        await this.streamManager.connect();
    }

    /**
     * Doom and destruction, WUHAHAHAHA!
     */
    public destroy(): void {
        this.streamManager?.disconnect();
    }

    /**
     * Make a subscription to the stream
     *
     * @param {EventStreamSubscription} subscription
     * @return {Promise<boolean>} whether it has been run(depends on stream being ready)
     */
    public subscribe(subscription: EventStreamSubscription): Promise<boolean> {
        return this.streamManager.subscriptionManager.subscribe(subscription);
    }

    /**
     * Remove a subscription from the stream
     *
     * @param {EventStreamSubscription} subscription
     * @return {Promise<boolean>} whether it has been run(depends on stream being ready)
     */
    public unsubscribe(subscription: EventStreamSubscription): Promise<boolean> {
        return this.streamManager.subscriptionManager.unsubscribe(subscription);
    }

    /**
     * Purge all subscriptions
     *
     * @return {Promise<boolean>} whether it has been run(depends on stream being ready)
     */
    public unsubscribeAll(): Promise<boolean> {
        return this.streamManager.subscriptionManager.unsubscribeAll();
    }

    /**
     * Rerun all subscriptions
     *
     * @param {boolean} reset When true unsubscribes to all events first
     * @return {Promise<boolean>} whether it has been run(depends on stream being ready)
     */
    public resubscribe(reset = false): Promise<boolean> {
        return this.streamManager.subscriptionManager.resubscribe(reset);
    }

    /**
     * Get the current subscription
     *
     * @return {EventStreamSubscription}
     */
    public get subscription(): EventStreamSubscription {
        return this.streamManager.subscriptionManager.subscription;
    }


}

export { Client };
