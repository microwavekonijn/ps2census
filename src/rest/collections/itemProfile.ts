import { DefaultCollection } from '../types/collection';
import { itemProfile } from '../formats/itemProfile';

export interface ItemProfile extends DefaultCollection {
    collection: 'item_profile';

    format: itemProfile;

    conditions: Partial<{
        item_id: string,
        profile_id: string
    }>;
}
