import { requestFactory } from '../utils/Helpers';
import itemCategory from '../types/itemCategory';

export type typeData = itemCategory;

export type query = Partial<{
    item_category_id: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string
}>;

export default requestFactory<'item_category'>('item_category');
