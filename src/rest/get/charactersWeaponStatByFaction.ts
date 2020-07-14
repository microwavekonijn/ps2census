import { defineCensusType } from '../Base';
import { lang } from '../types/base';

export type charactersWeaponStatByFactionData = {
    character_id: string,
    stat_name: string,
    item_id: string,
    vehicle_id: string,
    value_vs: string,
    value_nc: string,
    value_tr: string,
    last_save: string,
    last_save_date: string,
    item: {
        item_type_id: string,
        item_category_id: string,
        is_vehicle_weapon: string,
        name: lang,
        description: lang,
        faction_id: string,
        max_stack_size: string,
        image_set_id: string,
        image_id: string,
        image_path: string,
        skill_set_id: string,
        is_default_attachment: string,
    },
};

export type charactersWeaponStatByFactionQuery = Partial<charactersWeaponStatByFactionData>

export default defineCensusType<charactersWeaponStatByFactionQuery, charactersWeaponStatByFactionData[]>('characters_weapon_stat_by_faction');
