import { defineCensusType } from '../get';
import { lang } from '../types/lang';

export type charactersWeaponStatData = {
    character_id: string,
    stat_name: string,
    item_id: string,
    vehicle_id: string,
    value: string,
    last_save: string,
    last_save_date: string,
    vehicle: {
        name: lang,
        description: lang,
        type_id: string,
        type_name: string,
        cost: string,
        cost_resource_id: string,
        image_set_id: string,
        image_id: string,
        image_path: string,
    },
};

export type charactersWeaponStatQuery = Partial<charactersWeaponStatData>

export default defineCensusType<charactersWeaponStatQuery, charactersWeaponStatData[]>('characters_weapon_stat');
