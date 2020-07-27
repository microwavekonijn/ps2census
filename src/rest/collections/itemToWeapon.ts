import { requestFactory } from '../utils/Helpers';
import itemToWeapon from '../types/itemToWeapon';

export type typeData = itemToWeapon;

export type query = Partial<{
    item_id: string,
    weapon_id: string
}>;

export type resolve = never;

export default requestFactory<'item_to_weapon'>('item_to_weapon');
