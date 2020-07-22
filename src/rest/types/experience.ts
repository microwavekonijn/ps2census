import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    experience_id: string,
    description: string,
    xp: string,
};

export type query = {
    description: string,
    experience_id: string,
    xp: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('experience');
