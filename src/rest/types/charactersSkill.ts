import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    character_id: string,
    skill_id: string,
    last_save: string,
    last_save_date: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('charactersSkill');
