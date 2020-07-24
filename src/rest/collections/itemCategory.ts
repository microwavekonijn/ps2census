import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import itemCategory from '../types/itemCategory';

export type typeData = itemCategory;

export type query = {
    item_category_id: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('item_category');
