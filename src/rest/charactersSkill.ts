import { defineCensusType } from './Base';

export type charactersSkillData = {
    character_id: string,
    skill_id: string,
    last_save: string,
    last_save_date: string
};

export default defineCensusType<Partial<charactersSkillData>, charactersSkillData[]>('characters_skill');
