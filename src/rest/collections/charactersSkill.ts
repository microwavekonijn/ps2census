import { requestFactory } from '../utils/requestHelpers';

export { characterSkill as characterSkillFormat } from '../formats/characterSkill';

export type charactersSkillQuery = Partial<{
    character_id: string,
    last_save: string,
    last_save_date: string,
    skill_id: string
}>;

export const charactersSkill = requestFactory<'characters_skill'>('characters_skill');
