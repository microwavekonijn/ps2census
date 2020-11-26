import { DefaultCollection } from '../types/collection';
import { profileArmorMap } from '../formats/profileArmorMap';

export interface ProfileArmorMap extends DefaultCollection {
    collection: 'profile_armor_map';

    format: profileArmorMap;

    conditions: Partial<{
        armor_info_id: string,
        profile_id: string,
        rank: string
    }>;
}
