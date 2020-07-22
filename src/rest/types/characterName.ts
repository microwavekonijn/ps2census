import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    character_id: string,
    name: {
        first: string,
        first_lower: string,
    },
};

export type query = {
    character_id: string,
    name: string,
    'name.first': string,
    'name.first_lower': string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('characterName');
