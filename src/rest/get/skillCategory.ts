import { defineCensusType } from '../get';
import { lang } from '../types/lang';

export type skillCategoryData = {
    skill_category_id: string,
    skill_set_id: string,
    skill_set_index: string,
    skill_points: string,
    name: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
};

export type skillCategoryQuery = Partial<skillCategoryData>

export default defineCensusType<skillCategoryQuery, skillCategoryData[]>('skill_category');
