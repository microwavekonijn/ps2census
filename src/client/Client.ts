import { EventEmitter } from 'events';
import {
    AchievementEarned, BattleRankUp, ContinentLock, Death, FacilityControl, GainExperience, PS2Event, ItemAdded,
    MetagameEvent, PlayerFacilityCapture, PlayerFacilityDefend, PlayerLogin, PlayerLogout, SkillAdded, VehicleDestroy,
} from './utils/PS2Events';
import { ClientConfig, PS2Environment } from './utils/Types';
import EventStreamManager from './EventStreamManager';

declare interface Client {
    on(event: 'ready', listener: () => void): this;
    on(event: 'disconnected', listener: () => void): this;
    on(event: 'reconnecting', listener: () => void): this;
    on(event: 'error', listener: (e: Error) => void): this;
    on(event: 'warn', listener: (e: Error) => void): this;
    on(event: 'debug', listener: (info: string) => void): this;
    on(event: 'ps2Event', listener: (event: PS2Event) => void): this;
    on(event: 'duplicate', listener: (event: PS2Event) => void): this;
    on(event: 'subscribed', listener: (subscription: any) => void): this;

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
    on(event: 'ContinentUnlock', listener: (event: ContinentLock) => void): this;
    on(event: 'FacilityControl', listener: (event: FacilityControl) => void): this;
    on(event: 'MetagameEvent', listener: (event: MetagameEvent) => void): this;

    once(event: 'ready', listener: () => void): this;
    once(event: 'disconnected', listener: () => void): this;
    once(event: 'reconnecting', listener: () => void): this;
    once(event: 'error', listener: (e: Error) => void): this;
    once(event: 'warn', listener: (e: Error) => void): this;
    once(event: 'debug', listener: (info: string) => void): this;
    once(event: 'ps2Event', listener: (event: PS2Event) => void): this;
    once(event: 'duplicate', listener: (event: PS2Event) => void): this;
    once(event: 'subscribed', listener: (subscription: any) => void): this;

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
    once(event: 'ContinentUnlock', listener: (event: ContinentLock) => void): this;
    once(event: 'FacilityControl', listener: (event: FacilityControl) => void): this;
    once(event: 'MetagameEvent', listener: (event: MetagameEvent) => void): this;
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
                           environment = 'ps2',
                           streamManagerConfig,
                       }: ClientConfig = {}) {
        super();

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
