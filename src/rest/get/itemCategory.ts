import { defineCensusType } from '../get';
import { lang } from '../types/lang';

export type itemCategoryData = {
    item_category_id: string,
    name: lang,
};

export type itemCategoryQuery = Partial<itemCategoryData>

export default defineCensusType<itemCategoryQuery, itemCategoryData[]>('item_category');
