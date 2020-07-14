import { defineCensusType } from './Base';
import { lang } from './types/base';

export type itemData = {
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

export type itemQuery = Partial<itemData>

export default defineCensusType<itemQuery, itemData[]>('item');
