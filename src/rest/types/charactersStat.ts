import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


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

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('charactersStat');

