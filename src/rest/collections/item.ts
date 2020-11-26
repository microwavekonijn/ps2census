import { DefaultCollection } from '../types/collection';
import { item } from '../formats/item';

export interface Item extends DefaultCollection {
    collection: 'item';

    format: item;

    conditions: Partial<{
        activatable_ability_id: string,
        description: string,
        'description.de': string,
        'description.en': string,
        'description.es': string,
        'description.fr': string,
        'description.it': string,
        'description.tr': string,
        faction_id: string,
        image_id: string,
        image_path: string,
        image_set_id: string,
        is_default_attachment: string,
        is_vehicle_weapon: string,
        item_category_id: string,
        item_id: string,
        item_type_id: string,
        max_stack_size: string,
        name: string,
        'name.de': string,
        'name.en': string,
        'name.es': string,
        'name.fr': string,
        'name.it': string,
        'name.tr': string,
        passive_ability_id: string,
        release_time: string,
        skill_set_id: string
    }>;
}
