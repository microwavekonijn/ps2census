import { DefaultCollection } from '../types/collection';
import { armorFacing } from '../formats/armorFacing';

export interface ArmorFacing extends DefaultCollection {
    collection: 'armor_facing';

    format: armorFacing;

    conditions: Partial<{
        armor_facing_id: string,
        description: string
    }>;
}
