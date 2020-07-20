import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    character_id: string,
    stat_name: string,
    profile_id: string,
    value_forever_vs: string,
    value_forever_nc: string,
    value_forever_tr: string,
    value_monthly_vs: string,
    value_monthly_nc: string,
    value_monthly_tr: string,
    value_weekly_vs: string,
    value_weekly_nc: string,
    value_weekly_tr: string,
    value_daily_vs: string,
    value_daily_nc: string,
    value_daily_tr: string,
    value_one_life_max_vs: string,
    value_one_life_max_nc: string,
    value_one_life_max_tr: string,
    last_save: string,
    last_save_date: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('charactersStatByFaction');

