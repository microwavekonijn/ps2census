import { defineCensusType } from '../Base';
import { lang } from '../types/base';

export type itemCategoryData = {
    item_category_id: string,
    name: lang,
};

export type itemCategoryQuery = Partial<itemCategoryData>

export default defineCensusType<itemCategoryQuery, itemCategoryData[]>('item_category');
