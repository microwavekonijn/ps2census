import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
    character_id: string,
    stat_name: string,
    item_id: string,
    vehicle_id: string,
    value_vs: string,
    value_nc: string,
    value_tr: string,
    last_save: string,
    last_save_date: string,
    item: {
        item_type_id: string,
        item_category_id: string,
        is_vehicle_weapon: string,
        name: lang,
        description: lang,
        faction_id: string,
        max_stack_size: string,
        image_set_id: string,
        image_id: string,
        image_path: string,
        skill_set_id: string,
        is_default_attachment: string,
    },
};

export type query = {
    character_id: string,
    item_id: string,
    last_save: string,
    last_save_date: string,
    stat_name: string,
    value_nc: string,
    value_tr: string,
    value_vs: string,
    vehicle_id: string
}

export type resolve =
    'item'
    | 'vehicle';

export default requestFactory<operations, query, typeData[], commands, resolve>('charactersWeaponStatByFaction');
