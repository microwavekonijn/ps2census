import { DefaultCollection } from '../types/collection';
import { fireGroup } from '../formats/fireGroup';

export interface FireGroup extends DefaultCollection {
    collection: 'fire_group';

    format: fireGroup;

    conditions: Partial<{
        can_chamber_ironsights: string,
        chamber_duration_ms: string,
        fire_group_id: string,
        spool_up_initial_refire_ms: string,
        spool_up_ms: string,
        transition_duration_ms: string
    }>;
}
