import Timeout = NodeJS.Timeout;
import {
    AchievementEarned,
    BattleRankUp, ContinentLock, ContinentUnlock,
    Death, FacilityControl,
    GainExperience, GenericEvent,
    ItemAdded, MetagameEvent,
    PlayerFacilityCapture,
    PlayerFacilityDefend, PlayerLogin, PlayerLogout, SkillAdded, VehicleDestroy,
} from './PS2Events';

export default class DuplicateFilter {
    private cache = new Set<string>();
    private decayingCache = new Set<string>();

    /**
     * Events that can be ignored
     */
    private readonly ignore: string[];

    private readonly hashers = {
        /** Character centric events */
        AchievementEarned: ({character_id, timestamp, achievement_id}: AchievementEarned) => `0:${character_id}:${timestamp}:${achievement_id}`,
        BattleRankUp: ({character_id, timestamp, battle_rank}: BattleRankUp) => `1:${character_id}:${timestamp}:${battle_rank}`,
        Death: ({character_id, timestamp}: Death) => `2:${character_id}:${timestamp}`,
        GainExperience: ({character_id, timestamp}: GainExperience) => `3:${character_id}:${timestamp}`,
        ItemAdded: ({character_id, timestamp, item_id}: ItemAdded) => `4:${character_id}:${timestamp}:${item_id}`,
        PlayerFacilityCapture: ({character_id, timestamp}: PlayerFacilityCapture) => `5:${character_id}:${timestamp}`,
        PlayerFacilityDefend: ({character_id, timestamp}: PlayerFacilityDefend) => `6:${character_id}:${timestamp}`,
        PlayerLogin: ({character_id, timestamp}: PlayerLogin) => `7:${character_id}:${timestamp}`,
        PlayerLogout: ({character_id, timestamp}: PlayerLogout) => `8:${character_id}:${timestamp}`,
        SkillAdded: ({character_id, timestamp}: SkillAdded) => `9:${character_id}:${timestamp}`,
        VehicleDestroy: ({character_id, timestamp, attacker_character_id}: VehicleDestroy) => `10:${character_id}:${timestamp}:${attacker_character_id}`,
        /** World centric events */
        FacilityControl: ({world_id, zone_id, timestamp, facility_id}: FacilityControl) => `11:${world_id}:${zone_id}:${timestamp}:${facility_id}`,
        MetagameEvent: ({world_id, timestamp}: MetagameEvent) => `12:${world_id}:${timestamp}`,
        ContinentLock: ({world_id, zone_id, timestamp}: ContinentLock) => `13:${world_id}:${zone_id}:${timestamp}`,
        ContinentUnlock: ({world_id, zone_id, timestamp}: ContinentUnlock) => `14:${world_id}:${zone_id}:${timestamp}`,
    };

    /**
     * Interval that will decay older values
     */
    private timer?: Timeout;

    /**
     * Creates and starts the DuplicateFilter. Note that it the process of decay can vary between events.
     * Decay varies between decay ms and 2*decay ms.
     *
     * @param {number} decay
     * @param {string[]} ignore
     */
    public constructor({
                           decay = 2000,
                           ignore = ['GainExperience'],
                       } = {}) {
        this.ignore = ignore;

        this.timer = setInterval(this.decayCache.bind(this), decay);
    }

    /**
     * Records an event if it is has not been before
     *
     * @param event
     * @return {boolean} whether it has been recorded before
     */
    public record(event: any): boolean {
        if (this.ignore.includes(event.event_name))
            return true;

        const hash = this.hash(event);

        if (this.cache.has(hash) || this.decayingCache.has(hash))
            return false;

        this.cache.add(hash);

        return true;
    }

    /**
     * Removes values that have been decayed
     */
    private decayCache(): void {
        this.decayingCache = this.cache;
        this.cache = new Set<string>();
    }

    /**
     * Generates a hash for the event payload
     *
     * @param {GenericEvent} event
     * @return {string}
     */
    public hash(event: GenericEvent): string {
        if (this.hashers[event.event_name]) {
            // @ts-ignore
            return this.hashers[event.event_name](event);
        }

        throw new Error(`Unable to create hash for "${event.event_name}" with payload: ${JSON.stringify(event)}`);
    }
}
