import { requestFactory } from '../utils/requestHelpers';

export { itemToWeapon as itemToWeaponFormat } from '../formats/itemToWeapon';

export type itemToWeaponQuery = Partial<{
    item_id: string,
    weapon_id: string
}>;

export const itemToWeapon = requestFactory<'item_to_weapon'>('item_to_weapon');
