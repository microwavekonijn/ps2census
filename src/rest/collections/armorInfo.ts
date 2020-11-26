import { DefaultCollection } from '../types/collection';
import { armorInfo } from '../formats/armorInfo';

export interface ArmorInfo extends DefaultCollection {
    collection: 'armor_info';

    format: armorInfo;

    conditions: Partial<{
        armor_amount: string,
        armor_facing_id: string,
        armor_info_id: string,
        armor_percent: string,
        description: string
    }>;
}
