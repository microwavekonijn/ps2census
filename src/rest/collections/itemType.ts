import { requestFactory } from '../utils/Helpers';
import itemType from '../types/itemType';

export type typeData = itemType;

export type query = Partial<{
    code: string,
    item_type_id: string,
    name: string
}>;

export default requestFactory<'item_type'>('item_type');
