import { DefaultCollection } from '../types/collection';
import { characterSkill } from '../formats/characterSkill';

export interface CharactersSkill extends DefaultCollection {
    collection: 'characters_skill';

    format: characterSkill;

    conditions: Partial<{
        character_id: string,
        last_save: string,
        last_save_date: string,
        skill_id: string
    }>;
}
