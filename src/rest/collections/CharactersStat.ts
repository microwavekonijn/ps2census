export type CharactersStat = {
  collection: 'characters_stat';
  format: {
    character_id: string;
    stat_name: string;
    profile_id: string;
    value_forever: string;
    value_monthly: string;
    value_weekly: string;
    value_daily: string;
    value_one_life_max: string;
    last_save: string;
    last_save_date: string;
  };
  paths:
    | 'character_id'
    | 'stat_name'
    | 'profile_id'
    | 'value_forever'
    | 'value_monthly'
    | 'value_weekly'
    | 'value_daily'
    | 'value_one_life_max'
    | 'last_save'
    | 'last_save_date';
  partialPaths:
    | 'character_id'
    | 'stat_name'
    | 'profile_id'
    | 'value_forever'
    | 'value_monthly'
    | 'value_weekly'
    | 'value_daily'
    | 'value_one_life_max'
    | 'last_save'
    | 'last_save_date';
  conditions: {
    character_id?: string;
    last_save?: string;
    last_save_date?: string;
    profile_id?: string;
    stat_name?: string;
    value_daily?: string;
    value_forever?: string;
    value_monthly?: string;
    value_one_life_max?: string;
    value_weekly?: string;
  };
};
