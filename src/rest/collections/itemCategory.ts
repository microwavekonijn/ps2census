import { requestFactory } from '../utils/requestHelpers';

export { itemCategory as itemCategoryFormat } from '../formats/itemCategory';

export type itemCategoryQuery = Partial<{
    item_category_id: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string
}>;

export const itemCategory = requestFactory('item_category');
