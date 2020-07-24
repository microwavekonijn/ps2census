import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import world from '../types/world';

export type typeData = world;

export type query = {
    // this API man...
    // description_t4id: string,
    // name_t4id: string,
    description: string,
    'description.de': string,
    'description.en': string,
    'description.es': string,
    'description.fr': string,
    'description.it': string,
    'description.tr': string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    state: string,
    world_id: string,
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('world');
