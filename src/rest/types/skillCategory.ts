import { lang } from '../utils/responseTypes';

export default skillCategory;

type skillCategory = {
    skill_category_id: string,
    skill_set_id: string,
    skill_set_index: string,
    skill_points: string,
    name: lang,
    description: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
    [prop: string]: any,
};
