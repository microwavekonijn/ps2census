import { DefaultCollection } from '../types/collection';
import { characterStat } from '../formats/characterStat';

export interface CharactersStat extends DefaultCollection {
    collection: 'characters_stat';

    format: characterStat;

    conditions: Partial<{
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
}
