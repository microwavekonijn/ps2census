import { DefaultCollection } from '../types/collection';
import { characterAchievement } from '../formats/characterAchievement';

export interface CharactersAchievement extends DefaultCollection {
    collection: 'characters_achievement';

    format: characterAchievement;

    conditions: Partial<{
        achievement_id: string,
        character_id: string,
        earned_count: string,
        finish: string,
        finish_date: string,
        last_save: string,
        last_save_date: string,
        start: string,
        start_date: string
    }>;
}
