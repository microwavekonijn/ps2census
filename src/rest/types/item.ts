import { requestFactory } from '../utils/Helpers';
import { commands, lang, operations } from '../utils/Types';

export type typeData = {
    item_id: string,
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
    is_default_attachment: string,
};

export type query = {
    activatable_ability_id: string,
    description: string,
    'description.de': string,
    'description.en': string,
    'description.es': string,
    'description.fr': string,
    'description.it': string,
    'description.tr': string,
    faction_id: string,
    image_id: string,
    image_path: string,
    image_set_id: string,
    is_default_attachment: string,
    is_vehicle_weapon: string,
    item_category_id: string,
    item_id: string,
    item_type_id: string,
    max_stack_size: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    passive_ability_id: string,
    release_time: string,
    skill_set_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('item');
