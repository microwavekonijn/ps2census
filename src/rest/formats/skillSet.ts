import { Lang } from '../types/response';

export interface skillSet  {
    skill_set_id: string;
    skill_points: string;
    required_item_id: string;
    name: Lang;
    description: Lang;
    image_set_id: string;
    image_id: string;
    image_path: string;
    [prop: string]: unkown;
}
