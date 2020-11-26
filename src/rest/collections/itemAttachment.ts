import { DefaultCollection } from '../types/collection';
import { itemAttachment } from '../formats/itemAttachment';

export interface ItemAttachment extends DefaultCollection {
    collection: 'item_attachment';

    format: itemAttachment;

    conditions: Partial<{
        attachment_item_id: string,
        item_id: string
    }>;
}
