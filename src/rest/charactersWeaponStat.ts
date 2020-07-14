import { defineCensusType } from './Base';

export type charactersWeaponStatData = {
    character_id: string,
    stat_name: string,
    item_id: string,
    vehicle_id: string,
    value: string,
    last_save: string,
    last_save_date: string
};

export default defineCensusType<Partial<charactersWeaponStatData>, charactersWeaponStatData[]>('characters_weapon_stat');
