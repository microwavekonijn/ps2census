import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import characterWeaponStat from '../types/characterWeaponStat';
import vehicle from '../types/vehicle';
import item from '../types/item';

export type typeData = characterWeaponStat & {
    vehicle: vehicle, // vehicle
    item: item, // item
};

export type query = {
    character_id: string,
    item_id: string,
    last_save: string,
    last_save_date: string,
    stat_name: string,
    value: string,
    vehicle_id: string
}

export type resolve =
    'item'
    | 'vehicle';

export default requestFactory<operations, query, typeData[], commands, resolve>('characters_weapon_stat');
