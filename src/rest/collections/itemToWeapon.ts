import { requestFactory } from '../utils/requestHelpers';
import itemToWeapon from '../types/itemToWeapon';

export type typeData = itemToWeapon;

export type query = Partial<{
    item_id: string,
    weapon_id: string
}>;

export default requestFactory<'item_to_weapon'>('item_to_weapon');
