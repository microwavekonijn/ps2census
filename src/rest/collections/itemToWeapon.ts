import { DefaultCollection } from '../types/collection';
import { itemToWeapon } from '../formats/itemToWeapon';

export interface ItemToWeapon extends DefaultCollection {
    collection: 'item_to_weapon';

    format: itemToWeapon;

    conditions: Partial<{
        item_id: string,
        weapon_id: string
    }>;
}
