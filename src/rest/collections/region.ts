import { DefaultCollection } from '../types/collection';
import { region } from '../formats/region';

export interface Region extends DefaultCollection {
    collection: 'region';

    format: region;

    conditions: Partial<{
        initial_faction_id: string,
        name: string,
        'name.de': string,
        'name.en': string,
        'name.es': string,
        'name.fr': string,
        'name.it': string,
        'name.tr': string,
        region_id: string,
        zone_id: string
    }>;
}
