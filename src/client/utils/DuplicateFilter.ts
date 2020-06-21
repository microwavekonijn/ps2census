import Timeout = NodeJS.Timeout;

export default class DuplicateFilter {
    private cache = new Set<string>();
    private decayingCache = new Set<string>();

    /**
     * Events that can be ignored
     */
    private readonly ignore: string[];

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
     * TODO: Every event should probably be wrapped inside a object with their own hash method
     *
     * @param {object} event
     * @return {string}
     */
    public hash(event: any): string {
        switch (event.event_name) {
            /** Character centric events */
            case 'AchievementEarned':
                return `c0:${this.characterHash(event)}:${event.achievement_id}`;
            case 'BattleRankUp':
                return `c1:${this.characterHash(event)}`;
            case 'Death':
                return `c2:${this.characterHash(event)}`;
            case 'GainExperience':
                return `c3:${this.characterHash(event)}:${event.experience_id}:${event.other_id}`;
            case 'ItemAdded':
                return `c4:${this.characterHash(event)}`;
            case 'PlayerFacilityCapture':
                return `c5:${this.characterHash(event)}`;
            case 'PlayerFacilityDefend':
                return `c6:${this.characterHash(event)}`;
            case 'PlayerLogin':
                return `c7:${this.characterHash(event)}`;
            case 'PlayerLogout':
                return `c8:${this.characterHash(event)}`;
            case 'SkillAdded':
                return `c9:${this.characterHash(event)}`;
            case 'VehicleDestroy':
                return `c10:${this.characterHash(event)}`;

            /** World centric events */
            case 'FacilityControl':
                return `w0:${this.worldHash(event)}`;
            case 'MetagameEvent':
                return `w1:${this.worldHash(event)}`;
            case 'ContinentLock':
                return `w2:${this.worldHash(event)}`;
            case 'ContinentUnlock':
                return `w3:${this.worldHash(event)}`;
            default:
                throw new Error(`Unable to create hash for "${event.event_name}" with payload: ${JSON.stringify(event)}`);
        }
    }

    /**
     * Generate generic hash for character centric event
     *
     * @param event
     * @return {string}
     */
    private characterHash(event: any): string {
        return `${event.character_id}:${event.timestamp}`;
    }

    /**
     * Generate generic hash for world centric event
     *
     * @param event
     * @return {string}
     */
    private worldHash(event: any): string {
        return `${event.world_id}:${event.zone_id}:${event.timestamp}`;
    }
}
