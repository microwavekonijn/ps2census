import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    character_id: string,
    skill_id: string,
    last_save: string,
    last_save_date: string,
};

export type query = {
    character_id: string,
    last_save: string,
    last_save_date: string,
    skill_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('charactersSkill');
