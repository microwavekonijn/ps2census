import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import characterStat from '../types/characterStat';

export type typeData = characterStat;

export type query = {
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
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('characters_stat');
