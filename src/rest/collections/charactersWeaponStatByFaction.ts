import { DefaultCollection } from '../types/collection';
import { item } from '../formats/item';
import { vehicle } from '../formats/vehicle';
import { characterWeaponStatByFaction } from '../formats/characterWeaponStatByFaction';

export interface CharactersWeaponStatByFaction extends DefaultCollection {
    collection: 'characters_weapon_stat_by_faction';

    format: characterWeaponStatByFaction & {
        item: item, // item
        vehicle: vehicle, // vehicle
    };

    conditions: Partial<{
        character_id: string,
        item_id: string,
        last_save: string,
        last_save_date: string,
        stat_name: string,
        value_nc: string,
        value_tr: string,
        value_vs: string,
        vehicle_id: string
    }>;

    resolve: 'item' | 'vehicle';
}
