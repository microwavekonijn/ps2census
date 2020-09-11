export default characterWeaponStatByFaction;

type characterWeaponStatByFaction = {
    character_id: string,
    stat_name: string,
    item_id: string,
    vehicle_id: string,
    value_vs: string,
    value_nc: string,
    value_tr: string,
    last_save: string,
    last_save_date: string,
    [prop: string]: any,
};
