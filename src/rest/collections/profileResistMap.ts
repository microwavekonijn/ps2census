import { DefaultCollection } from '../types/collection';
import { profileResistMap } from '../formats/profileResistMap';

export interface ProfileResistMap extends DefaultCollection {
    collection: 'profile_resist_map';

    format: profileResistMap;

    conditions: Partial<{
        profile_id: string,
        rank: string,
        resist_info_id: string
    }>;
}
