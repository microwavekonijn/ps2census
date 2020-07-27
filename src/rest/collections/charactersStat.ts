import { requestFactory } from '../utils/Helpers';
import characterStat from '../types/characterStat';

export type typeData = characterStat;

export type query = Partial<{
    character_id: string,
    last_save: string,
    last_save_date: string,
    profile_id: string,
    stat_name: string,
    value_daily: string,
    value_forever: string,
    value_monthly: string,
    value_one_life_max: string,
    value_weekly: string
}>;

export type resolve = never;

export default requestFactory<'characters_stat'>('characters_stat');
