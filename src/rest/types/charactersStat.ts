import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    character_id: string,
    stat_name: string,
    profile_id: string,
    value_forever: string,
    value_monthly: string,
    value_weekly: string,
    value_daily: string,
    value_one_life_max: string,
    last_save: string,
    last_save_date: string,
};

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

export default requestFactory<operations, query, typeData[], commands, resolve>('charactersStat');
