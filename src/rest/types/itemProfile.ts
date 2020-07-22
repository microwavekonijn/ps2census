import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    item_id: string,
    profile_id: string,
};

export type query = {
    item_id: string,
    profile_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('itemProfile');
