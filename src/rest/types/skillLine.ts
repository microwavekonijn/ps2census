import { lang } from '../utils/responseTypes';

export type skillLine = {
    skill_line_id: string,
    skill_points: string,
    skill_category_id: string,
    skill_category_index: string,
    name: lang,
    description: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
    [prop: string]: any,
};
