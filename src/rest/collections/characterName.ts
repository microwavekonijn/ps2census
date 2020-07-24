import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import character from '../types/character';

export type typeData = Pick<character, 'character_id' | 'name'>;

export type query = Partial<{
    character_id: string,
    name: string,
    'name.first': string,
    'name.first_lower': string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('character_name');
