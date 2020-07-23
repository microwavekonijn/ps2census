import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    character_id: string,
    item_id: string,
};

export type query = {
    character_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('characters_item');
