import { defineCensusType } from './Base';

export type charactersWeaponStatByFactionData = {
    character_id: string,
    stat_name: string,
    item_id: string,
    vehicle_id: string,
    value_vs: string,
    value_nc: string,
    value_tr: string,
    last_save: string,
    last_save_date: string
};

export default defineCensusType<Partial<charactersWeaponStatByFactionData>, charactersWeaponStatByFactionData[]>('characters_weapon_stat_by_faction');
