import { Lang } from '../types/response';

export interface achievement {
    achievement_id: string;
    item_id: string;
    objective_group_id: string;
    reward_id: string;
    repeatable: string;
    name: Lang;
    description: Lang;
    image_set_id: string;
    image_id: string;
    image_path: string;
}
