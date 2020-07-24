import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import characterWorld from '../types/characterWorld';

export type typeData = characterWorld;

export type query = {
    character_id: string,
    world_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('characters_world');
