import { requestFactory } from '../utils/requestHelpers';
import { characterWeaponStat } from '../formats/characterWeaponStat';
import { vehicle } from '../formats/vehicle';
import { item } from '../formats/item';

export type charactersWeaponStatFormat = characterWeaponStat & {
    vehicle: vehicle, // vehicle
    item: item, // item
};

export type charactersWeaponStatQuery = Partial<{
    character_id: string,
    item_id: string,
    last_save: string,
    last_save_date: string,
    stat_name: string,
    value: string,
    vehicle_id: string
}>;

export type charactersWeaponStatResolve =
    'item'
    | 'vehicle';

export const charactersWeaponStat = requestFactory<'characters_weapon_stat'>('characters_weapon_stat');
