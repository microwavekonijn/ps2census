import { defineCensusType } from '../get';

export type charactersSkillData = {
    character_id: string,
    skill_id: string,
    last_save: string,
    last_save_date: string,
};

export type charactersSkillQuery = Partial<charactersSkillData>

export default defineCensusType<charactersSkillQuery, charactersSkillData[]>('characters_skill');
