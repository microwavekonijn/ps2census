import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import itemToWeapon from '../types/itemToWeapon';

export type typeData = itemToWeapon;

export type query = {
    item_id: string,
    weapon_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('item_to_weapon');
