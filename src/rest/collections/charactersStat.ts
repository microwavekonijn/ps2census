import { requestFactory } from '../utils/requestHelpers';

export { characterStat as charactersStatFormat } from '../formats/characterStat';

export type charactersStatQuery = Partial<{
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

export const charactersStat = requestFactory<'characters_stat'>('characters_stat');
