import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    item_type_id: string,
    name: string,
    code: string,
};

export type query = {
    code: string,
    item_type_id: string,
    name: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('itemType');
