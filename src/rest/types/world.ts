import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
    world_id: string,
    state: string,
    name: lang,
};

export type query = {
    description_t4id: string,
    name_t4id: string,
    state: string,
    world_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('world');
