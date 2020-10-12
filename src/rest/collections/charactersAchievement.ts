import { requestFactory } from '../utils/requestHelpers';

export { characterAchievement as characterAchievementFormat } from '../formats/characterAchievement';

export type charactersAchievementQuery = Partial<{
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

export const charactersAchievement = requestFactory<'characters_achievement'>('characters_achievement');
