import { DefaultCollection } from '../types/collection';
import { itemCategory } from '../formats/itemCategory';

export interface ItemCategory extends DefaultCollection {
    collection: 'item_category';

    format: itemCategory;

    conditions: Partial<{
        item_category_id: string,
        name: string,
        'name.de': string,
        'name.en': string,
        'name.es': string,
        'name.fr': string,
        'name.it': string,
        'name.tr': string
    }>;
}
