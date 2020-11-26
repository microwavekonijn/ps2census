import { Lang } from '../types/response';

export interface skillCategory  {
    skill_category_id: string;
    skill_set_id: string;
    skill_set_index: string;
    skill_points: string;
    name: Lang;
    description: Lang;
    image_set_id: string;
    image_id: string;
    image_path: string;
    [prop: string]: unkown;
}
