import { requestFactory } from '../utils/requestHelpers';
import { itemType } from '../types/itemType';

export type typeData = itemType;

export type query = Partial<{
    code: string,
    item_type_id: string,
    name: string
}>;

export const itemType = requestFactory<'item_type'>('item_type');
