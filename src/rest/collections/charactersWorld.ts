import { requestFactory } from '../utils/Helpers';
import { commands as baseCommands } from '../utils/Types';
import characterWorld from '../types/characterWorld';

export type typeData = characterWorld;

export type query = Partial<{
    character_id: string,
    world_id: string
}>;

export type resolve = never;

export type commands = Extract<baseCommands, 'join' | 'tree'>;


export default requestFactory<'get', query, typeData[], commands, resolve>('characters_world');
