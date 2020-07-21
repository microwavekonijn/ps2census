import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

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

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('item');

