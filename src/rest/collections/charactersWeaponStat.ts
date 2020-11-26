import { DefaultCollection } from '../types/collection';
import { characterWeaponStat } from '../formats/characterWeaponStat';
import { vehicle } from '../formats/vehicle';
import { item } from '../formats/item';

export interface CharactersWeaponStat extends DefaultCollection {
    collection: 'characters_weapon_stat';

    format: characterWeaponStat & {
        vehicle: vehicle, // vehicle
        item: item, // item
    };

    conditions: Partial<{
        character_id: string,
        item_id: string,
        last_save: string,
        last_save_date: string,
        stat_name: string,
        value: string,
        vehicle_id: string
    }>;

    resolve: 'item' | 'vehicle';
}
