import { DefaultCollection } from '../types/collection';
import { metagameEvent } from '../formats/metagameEvent';

export interface MetagameEvent extends DefaultCollection {
    collection: 'metagame_event';

    format: metagameEvent;

    conditions: Partial<{
        description: string,
        'description.de': string,
        'description.en': string,
        'description.es': string,
        'description.fr': string,
        'description.it': string,
        'description.tr': string,
        experience_bonus: string,
        metagame_event_id: string,
        name: string,
        'name.de': string,
        'name.en': string,
        'name.es': string,
        'name.fr': string,
        'name.it': string,
        'name.tr': string,
        type: string
    }>;
}
