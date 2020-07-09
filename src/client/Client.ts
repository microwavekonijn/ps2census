import { EventEmitter } from 'events';
import {
    AchievementEarnedData, BattleRankUpData, ContinentLockData, DeathData, FacilityControlData, GainExperienceData,
    ItemAddedData, MetagameEventData, PlayerFacilityCaptureData, PlayerFacilityDefendData, PlayerLoginData,
    PlayerLogoutData, SkillAddedData, VehicleDestroyData,
} from './utils/PS2Events';
import { ClientConfig, PS2Environment } from './utils/Types';
import EventStreamManager from './EventStreamManager';
import PS2Event from './events/PS2Event';

declare interface Client {
    on(event: 'ready', listener: () => void): this;
    on(event: 'disconnected', listener: () => void): this;
    on(event: 'reconnecting', listener: () => void): this;
    on(event: 'error', listener: (e: Error) => void): this;
    on(event: 'warn', listener: (e: Error) => void): this;
    on(event: 'debug', listener: (info: string) => void): this;
    on(event: 'duplicate', listener: (event: PS2Event) => void): this;
    on(event: 'subscribed', listener: (subscription: any) => void): this;

    on(event: 'ps2Event', listener: (event: PS2Event) => void): this;
    on(event: 'achievementEarned', listener: (event: AchievementEarnedData) => void): this;
    on(event: 'battleRankUp', listener: (event: BattleRankUpData) => void): this;
    on(event: 'death', listener: (event: DeathData) => void): this;
    on(event: 'gainExperience', listener: (event: GainExperienceData) => void): this;
    on(event: 'itemAdded', listener: (event: ItemAddedData) => void): this;
    on(event: 'playerFacilityCapture', listener: (event: PlayerFacilityCaptureData) => void): this;
    on(event: 'playerFacilityDefend', listener: (event: PlayerFacilityDefendData) => void): this;
    on(event: 'playerLogin', listener: (event: PlayerLoginData) => void): this;
    on(event: 'playerLogout', listener: (event: PlayerLogoutData) => void): this;
    on(event: 'skillAdded', listener: (event: SkillAddedData) => void): this;
    on(event: 'vehicleDestroy', listener: (event: VehicleDestroyData) => void): this;
    on(event: 'continentLock', listener: (event: ContinentLockData) => void): this;
    on(event: 'continentUnlock', listener: (event: ContinentLockData) => void): this;
    on(event: 'facilityControl', listener: (event: FacilityControlData) => void): this;
    on(event: 'metagameEvent', listener: (event: MetagameEventData) => void): this;

    once(event: 'ready', listener: () => void): this;
    once(event: 'disconnected', listener: () => void): this;
    once(event: 'reconnecting', listener: () => void): this;
    once(event: 'error', listener: (e: Error) => void): this;
    once(event: 'warn', listener: (e: Error) => void): this;
    once(event: 'debug', listener: (info: string) => void): this;
    once(event: 'duplicate', listener: (event: PS2Event) => void): this;
    once(event: 'subscribed', listener: (subscription: any) => void): this;

    once(event: 'ps2Event', listener: (event: PS2Event) => void): this;
    once(event: 'achievementEarned', listener: (event: AchievementEarnedData) => void): this;
    once(event: 'battleRankUp', listener: (event: BattleRankUpData) => void): this;
    once(event: 'death', listener: (event: DeathData) => void): this;
    once(event: 'gainExperience', listener: (event: GainExperienceData) => void): this;
    once(event: 'itemAdded', listener: (event: ItemAddedData) => void): this;
    once(event: 'playerFacilityCapture', listener: (event: PlayerFacilityCaptureData) => void): this;
    once(event: 'playerFacilityDefend', listener: (event: PlayerFacilityDefendData) => void): this;
    once(event: 'playerLogin', listener: (event: PlayerLoginData) => void): this;
    once(event: 'playerLogout', listener: (event: PlayerLogoutData) => void): this;
    once(event: 'skillAdded', listener: (event: SkillAddedData) => void): this;
    once(event: 'vehicleDestroy', listener: (event: VehicleDestroyData) => void): this;
    once(event: 'continentLock', listener: (event: ContinentLockData) => void): this;
    once(event: 'continentUnlock', listener: (event: ContinentLockData) => void): this;
    once(event: 'facilityControl', listener: (event: FacilityControlData) => void): this;
    once(event: 'metagameEvent', listener: (event: MetagameEventData) => void): this;
}

class Client extends EventEmitter {
    /**
     * @type{string?} service Id for the Census API
     */
    public readonly serviceId?: string;

    /**
     * @type{PS2Environment} the environment the client is configured for
     */
    public readonly environment: PS2Environment;

    /**
     * @type{EventStreamManager?} the event stream manager
     */
    private readonly streamManager?: EventStreamManager;

    /**
     * @param {ClientConfig} config
     */
    public constructor({
                           serviceId,
                           environment = 'ps2',
                           streamManagerConfig,
                       }: ClientConfig = {}) {
        super();

        this.serviceId = serviceId;
        this.environment = environment;

        if (this.serviceId)
            this.streamManager = new EventStreamManager(this, streamManagerConfig);
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
}

export default Client;
