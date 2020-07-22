import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
    character_id: string,
    stat_name: string,
    item_id: string,
    vehicle_id: string,
    value: string,
    last_save: string,
    last_save_date: string,
    vehicle: {
        name: lang,
        description: lang,
        type_id: string,
        type_name: string,
        cost: string,
        cost_resource_id: string,
        image_set_id: string,
        image_id: string,
        image_path: string,
    },
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

export default requestFactory<operations, query, typeData[], commands, resolve>('charactersWeaponStat');
