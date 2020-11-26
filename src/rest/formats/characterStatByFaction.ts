export interface characterStatByFaction  {
    character_id: string;
    stat_name: string;
    profile_id: string;
    value_forever_vs: string;
    value_forever_nc: string;
    value_forever_tr: string;
    value_monthly_vs: string;
    value_monthly_nc: string;
    value_monthly_tr: string;
    value_weekly_vs: string;
    value_weekly_nc: string;
    value_weekly_tr: string;
    value_daily_vs: string;
    value_daily_nc: string;
    value_daily_tr: string;
    value_one_life_max_vs: string;
    value_one_life_max_nc: string;
    value_one_life_max_tr: string;
    last_save: string;
    last_save_date: string;
    [prop: string]: unkown;
}
