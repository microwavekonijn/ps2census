import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import experience from '../types/experience';

export type typeData = experience;

export type query = {
    description: string,
    experience_id: string,
    xp: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('experience');
