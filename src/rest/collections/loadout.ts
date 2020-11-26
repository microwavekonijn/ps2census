import { DefaultCollection } from '../types/collection';
import { loadout } from '../formats/loadout';

export interface Loadout extends DefaultCollection {
    collection: 'loadout';

    format: loadout;

    conditions: Partial<{
        code_name: string,
        faction_id: string,
        loadout_id: string,
        profile_id: string
    }>;
}
