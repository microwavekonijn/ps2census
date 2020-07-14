import { defineCensusType } from './Base';

export type charactersStatHistoryData = {
    character_id: string,
    stat_name: string,
    all_time: string,
    one_life_max: string,
    day: Record<string, string>,
    month: Record<string, string>,
    week: Record<string, string>,
    last_save: string,
    last_save_date: string
};

export default defineCensusType<Partial<charactersStatHistoryData>, charactersStatHistoryData[]>('characters_stat_history');
