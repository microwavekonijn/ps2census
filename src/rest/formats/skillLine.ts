import { Lang } from '../types/response';

export interface skillLine  {
    skill_line_id: string;
    skill_points: string;
    skill_category_id: string;
    skill_category_index: string;
    name: Lang;
    description: Lang;
    image_set_id: string;
    image_id: string;
    image_path: string;
    [prop: string]: unknown;
}
