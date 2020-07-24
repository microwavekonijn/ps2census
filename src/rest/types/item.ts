import { lang } from '../utils/Types';

export default item;

type item = {
    "item_id": string,
    "item_type_id": string,
    "item_category_id": string,
    "activatable_ability_id": string,
    "passive_ability_id": string,
    "is_vehicle_weapon": string,
    "name": lang,
    "description": lang,
    "faction_id": string,
    "max_stack_size": string,
    "image_set_id": string,
    "image_id": string,
    "image_path": string,
    "skill_set_id": string,
    "is_default_attachment": string,
};
