import { requestFactory } from '../utils/Helpers';
import characterSkill from '../types/characterSkill';

export type typeData = characterSkill;

export type query = Partial<{
    character_id: string,
    last_save: string,
    last_save_date: string,
    skill_id: string
}>;

export default requestFactory<'characters_skill'>('characters_skill');
