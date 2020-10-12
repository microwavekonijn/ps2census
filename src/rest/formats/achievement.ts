import { lang } from '../types/response';

export type achievement = {
    achievement_id: string,
    item_id: string,
    objective_group_id: string,
    reward_id: string,
    repeatable: string,
    name: lang,
    description: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
    [prop: string]: any,
};
