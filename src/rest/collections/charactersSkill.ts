import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import characterSkill from '../types/characterSkill';

export type typeData = characterSkill;

export type query = {
    character_id: string,
    last_save: string,
    last_save_date: string,
    skill_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('characters_skill');
