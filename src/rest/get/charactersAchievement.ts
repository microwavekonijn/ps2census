import { defineCensusType } from '../get';

export type charactersAchievementData = {
    character_id: string,
    achievement_id: string,
    start: string,
    start_date: string,
    finish: string,
    finish_date: string,
    last_save: string,
    last_save_date: string,
};

export type charactersAchievementQuery = Partial<charactersAchievementData>

export default defineCensusType<charactersAchievementQuery, charactersAchievementData[]>('characters_achievement');
