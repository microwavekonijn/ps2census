import { DefaultCollection } from '../types/collection';
import { itemType } from '../formats/itemType';

export interface ItemType extends DefaultCollection {
    collection: 'item_type';

    format: itemType;

    conditions: Partial<{
        code: string,
        item_type_id: string,
        name: string
    }>;
}
