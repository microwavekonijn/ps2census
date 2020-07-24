import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import skillCategory from '../types/skillCategory';

export type typeData = skillCategory;

export type query = Partial<{
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

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('skill_category');
