export default characterStat;

type characterStat = {
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
    [prop: string]: any,
};
