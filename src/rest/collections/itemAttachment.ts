import { requestFactory } from '../utils/requestHelpers';
import { itemAttachment } from '../types/itemAttachment';

export type typeData = itemAttachment;

export type query = Partial<{
    attachment_item_id: string,
    item_id: string
}>;

export const itemAttachment = requestFactory<'item_attachment'>('item_attachment');
