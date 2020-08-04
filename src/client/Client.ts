import { EventEmitter } from 'events';
import { ClientConfig, EventStreamSubscribed, EventStreamSubscription } from './utils/Types';
import EventStreamManager from './EventStreamManager';
import PS2Event from './events/PS2Event';
import { PS2Environment } from '../utils/Types';
import AchievementEarned from './events/AchievementEarned';
import BattleRankUp from './events/BattleRankUp';
import Death from './events/Death';
import GainExperience from './events/GainExperience';
import ItemAdded from './events/ItemAdded';
import PlayerFacilityCapture from './events/PlayerFacilityCapture';
import PlayerFacilityDefend from './events/PlayerFacilityDefend';
import PlayerLogin from './events/PlayerLogin';
import PlayerLogout from './events/PlayerLogout';
import SkillAdded from './events/SkillAdded';
import VehicleDestroy from './events/VehicleDestroy';
import ContinentLock from './events/ContinentLock';
import FacilityControl from './events/FacilityControl';
import MetagameEvent from './events/MetagameEvent';
import { getFactory } from '../rest';
import { getMethod } from '../rest/get';
import CharacterManager from './managers/CharacterManager';
import Cache from './utils/Cache';
import character from '../rest/collections/character';
import resolve from '../rest/commands/resolve';

declare interface Client {
    on(event: 'ready', listener: () => void): this;
    on(event: 'disconnected', listener: () => void): this;
    on(event: 'reconnecting', listener: () => void): this;
    on(event: 'error', listener: (e: Error) => void): this;
    on(event: 'warn', listener: (e: Error) => void): this;
    on(event: 'debug', listener: (info: string, label: string) => void): this;
    on(event: 'duplicate', listener: (event: PS2Event) => void): this;
    on(event: 'subscribed', listener: (subscription: EventStreamSubscribed) => void): this;
    on(event: 'serviceState', listener: (id: string, online: boolean) => void): this;

    on(event: 'ps2Event', listener: (event: PS2Event) => void): this;
    on(event: 'achievementEarned', listener: (event: AchievementEarned) => void): this;
    on(event: 'battleRankUp', listener: (event: BattleRankUp) => void): this;
    on(event: 'death', listener: (event: Death) => void): this;
    on(event: 'gainExperience', listener: (event: GainExperience) => void): this;
    on(event: 'itemAdded', listener: (event: ItemAdded) => void): this;
    on(event: 'playerFacilityCapture', listener: (event: PlayerFacilityCapture) => void): this;
    on(event: 'playerFacilityDefend', listener: (event: PlayerFacilityDefend) => void): this;
    on(event: 'playerLogin', listener: (event: PlayerLogin) => void): this;
    on(event: 'playerLogout', listener: (event: PlayerLogout) => void): this;
    on(event: 'skillAdded', listener: (event: SkillAdded) => void): this;
    on(event: 'vehicleDestroy', listener: (event: VehicleDestroy) => void): this;
    on(event: 'continentLock', listener: (event: ContinentLock) => void): this;
    on(event: 'continentUnlock', listener: (event: ContinentLock) => void): this;
    on(event: 'facilityControl', listener: (event: FacilityControl) => void): this;
    on(event: 'metagameEvent', listener: (event: MetagameEvent) => void): this;

    once(event: 'ready', listener: () => void): this;
    once(event: 'disconnected', listener: () => void): this;
    once(event: 'reconnecting', listener: () => void): this;
    once(event: 'error', listener: (e: Error) => void): this;
    once(event: 'warn', listener: (e: Error) => void): this;
    once(event: 'debug', listener: (info: string, label: string) => void): this;
    once(event: 'duplicate', listener: (event: PS2Event) => void): this;
    once(event: 'subscribed', listener: (subscription: EventStreamSubscribed) => void): this;
    once(event: 'serviceState', listener: (id: string, online: boolean) => void): this;

    once(event: 'ps2Event', listener: (event: PS2Event) => void): this;
    once(event: 'achievementEarned', listener: (event: AchievementEarned) => void): this;
    once(event: 'battleRankUp', listener: (event: BattleRankUp) => void): this;
    once(event: 'death', listener: (event: Death) => void): this;
    once(event: 'gainExperience', listener: (event: GainExperience) => void): this;
    once(event: 'itemAdded', listener: (event: ItemAdded) => void): this;
    once(event: 'playerFacilityCapture', listener: (event: PlayerFacilityCapture) => void): this;
    once(event: 'playerFacilityDefend', listener: (event: PlayerFacilityDefend) => void): this;
    once(event: 'playerLogin', listener: (event: PlayerLogin) => void): this;
    once(event: 'playerLogout', listener: (event: PlayerLogout) => void): this;
    once(event: 'skillAdded', listener: (event: SkillAdded) => void): this;
    once(event: 'vehicleDestroy', listener: (event: VehicleDestroy) => void): this;
    once(event: 'continentLock', listener: (event: ContinentLock) => void): this;
    once(event: 'continentUnlock', listener: (event: ContinentLock) => void): this;
    once(event: 'facilityControl', listener: (event: FacilityControl) => void): this;
    once(event: 'metagameEvent', listener: (event: MetagameEvent) => void): this;
}

class Client extends EventEmitter {
    /**
     * @type {string?} service Id for the Census API
     */
    public readonly serviceId?: string;

    /**
     * @type {PS2Environment} the environment the client is configured for
     */
    public readonly environment: PS2Environment;

    /**
     * @type{EventStreamManager?} the event stream manager
     */
    private readonly streamManager?: EventStreamManager;

    /**
     * @type {getMethod} Get method to fetch data from the Rest API
     */
    public readonly get: getMethod;

    /**
     * @type {CharacterManager} The character manager for Census API requests
     */
    public readonly characterManager: CharacterManager;

    /**
     * @param {ClientConfig} config
     */
    public constructor({
                           serviceId,
                           environment = 'ps2',
                           streamManagerConfig,
                           characterManager = {},
                       }: ClientConfig = {}) {
        super();

        this.serviceId = serviceId;
        this.environment = environment;

        this.get = getFactory(environment, serviceId);

        if (this.serviceId)
            this.streamManager = new EventStreamManager(this, streamManagerConfig);

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
        if (!this.streamManager)
            throw new Error('EventStreamManager is missing. Make sure you provide a service Id.');

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
     */
    public subscribe(subscription: EventStreamSubscription): EventStreamSubscription {
        if (!this.streamManager)
            throw new Error('EventStreamManager is missing. Make sure you provide a service Id.');

        return this.streamManager.subscriptionManager.subscribe(subscription);
    }

    /**
     * Remove a subscription from the stream
     *
     * @param {EventStreamSubscription} subscription
     */
    public unsubscribe(subscription: EventStreamSubscription): boolean {
        if (!this.streamManager)
            throw new Error('EventStreamManager is missing. Make sure you provide a service Id.');

        return this.streamManager.subscriptionManager.unsubscribe(subscription);
    }

    /**
     * Purge all subscriptions
     */
    public unsubscribeAll(): void {
        if (!this.streamManager)
            throw new Error('EventStreamManager is missing. Make sure you provide a service Id.');

        this.streamManager.subscriptionManager.unsubscribeAll();
    }

    /**
     * Rerun all subscriptions
     *
     * @param {boolean} reset When true unsubscribes to all events first
     * @return {boolean} whether it has been run(depends on stream being ready)
     */
    public resubscribe(reset = false): boolean {
        if (!this.streamManager)
            throw new Error('EventStreamManager is missing. Make sure you provide a service Id.');

        return this.streamManager.subscriptionManager.resubscribe(reset);
    }

    /**
     * Get current subscriptions
     *
     * @return {Array<EventStreamSubscription>}
     */
    public get currentSubscriptions(): Array<EventStreamSubscription> {
        if (!this.streamManager)
            throw new Error('EventStreamManager is missing. Make sure you provide a service Id.');

        return this.streamManager.subscriptionManager.currentSubscriptions;
    }


}

export default Client;
