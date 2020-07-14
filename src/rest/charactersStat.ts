import { defineCensusType } from './Base';

export type charactersStatData = {
    character_id: string,
    stat_name: string,
    profile_id: string,
    value_forever: string,
    value_monthly: string,
    value_weekly: string,
    value_daily: string,
    value_one_life_max: string,
    last_save: string,
    last_save_date: string
};

export default defineCensusType<Partial<charactersStatData>, charactersStatData[]>('characters_stat');
