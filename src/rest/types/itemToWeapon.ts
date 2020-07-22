import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    item_id: string,
    weapon_id: string,
};

export type query = {
    item_id: string,
    weapon_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('itemToWeapon');
