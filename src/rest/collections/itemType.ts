import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import itemType from '../types/itemType';

export type typeData = itemType;

export type query = {
    code: string,
    item_type_id: string,
    name: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('item_type');
