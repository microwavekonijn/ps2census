import { requestFactory } from '../utils/requestHelpers';

export { skillCategory as skillCategoryFormat } from '../formats/skillCategory';

export type skillCategoryQuery = Partial<{
    description: string,
    'description.de': string,
    'description.en': string,
    'description.es': string,
    'description.fr': string,
    'description.it': string,
    'description.tr': string,
    image_id: string,
    image_path: string,
    image_set_id: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    skill_category_id: string,
    skill_points: string,
    skill_set_id: string,
    skill_set_index: string
}>;

export const skillCategory = requestFactory<'skill_category'>('skill_category');
