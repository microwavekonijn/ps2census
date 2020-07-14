import { defineCensusType } from './Base';

export type charactersAchievementsData = {
    character_id: string,
    achievement_id: string,
    start: string,
    start_date: string,
    finish: string,
    finish_date: string,
    last_save: string,
    last_save_date: string
};

export default defineCensusType<Partial<charactersAchievementsData>, charactersAchievementsData[]>('characters_achievement');
