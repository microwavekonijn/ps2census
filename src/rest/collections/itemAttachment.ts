import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import itemAttachment from '../types/itemAttachment';

export type typeData = itemAttachment;

export type query = Partial<{
    attachment_item_id: string,
    item_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('item_attachment');
