import { requestFactory } from '../utils/requestHelpers';
import { characterWeaponStat } from '../formats/characterWeaponStat';
import { vehicle } from '../formats/vehicle';
import { item } from '../formats/item';

export type typeData = characterWeaponStat & {
    vehicle: vehicle, // vehicle
    item: item, // item
};

export type query = Partial<{
    character_id: string,
    item_id: string,
    last_save: string,
    last_save_date: string,
    stat_name: string,
    value: string,
    vehicle_id: string
}>;

export type resolve =
    'item'
    | 'vehicle';

export const charactersWeaponStat = requestFactory<'characters_weapon_stat'>('characters_weapon_stat');
