import { requestFactory } from '../utils/Helpers';
import itemAttachment from '../types/itemAttachment';

export type typeData = itemAttachment;

export type query = Partial<{
    attachment_item_id: string,
    item_id: string
}>;

export type resolve = never;

export default requestFactory<'item_attachment'>('item_attachment');
