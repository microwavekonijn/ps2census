import { requestFactory } from '../utils/requestHelpers';

export { characterStat as characterStatFormat } from '../formats/characterStat';

export type charactersStatByFactionQuery = Partial<{
    character_id: string,
    last_save: string,
    last_save_date: string,
    profile_id: string,
    stat_name: string,
    value_daily_nc: string,
    value_daily_tr: string,
    value_daily_vs: string,
    value_forever_nc: string,
    value_forever_tr: string,
    value_forever_vs: string,
    value_monthly_nc: string,
    value_monthly_tr: string,
    value_monthly_vs: string,
    value_one_life_max_nc: string,
    value_one_life_max_tr: string,
    value_one_life_max_vs: string,
    value_weekly_nc: string,
    value_weekly_tr: string,
    value_weekly_vs: string
}>;

export const charactersStatByFaction = requestFactory<'characters_stat_by_faction'>('characters_stat_by_faction');
