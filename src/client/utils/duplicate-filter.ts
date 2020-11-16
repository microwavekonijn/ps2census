import { StreamFilterContract } from '../concerns/stream-filter.contract';
import { PS2Event } from '../events/ps2.event';
import { DecayingSet } from './decaying-set';

export class DuplicateFilter implements StreamFilterContract {
    private cache: DecayingSet<string>;

    /**
     * Events that can be ignored
     */
    private readonly ignore: string[];

    /**
     * Creates and starts the DuplicateFilter. Note that it the process of decay can vary between events.
     * Decay varies between decay ms and 2*decay ms.
     *
     * @param {object} config
     */
    public constructor({
                           decay = 2000,
                           partitions = 8,
                           ignore = ['GainExperience'],
                       } = {}) {

        this.ignore = ignore;
        this.cache = new DecayingSet<string>(partitions, decay);
    }

    /**
     * Whether to filter the event or not
     *
     * @param {PS2Event} event
     * @return {boolean} whether it has been recorded before
     */
    public filter(event: PS2Event): boolean {
        if (this.ignore.includes(event.event_name))
            return false;

        const hash = event.toHash();

        if (this.cache.has(hash))
            return true;

        this.cache.add(hash);

        return false;
    }
}
