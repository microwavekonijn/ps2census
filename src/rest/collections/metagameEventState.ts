import { DefaultCollection } from '../types/collection';
import { metagameEventState } from '../formats/metagameEventState';

export interface MetagameEventState extends DefaultCollection {
    collection: 'metagame_event_state';

    format: metagameEventState;

    conditions: Partial<{
        metagame_event_state_id: string,
        name: string
    }>;
}
