import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
    skill_category_id: string,
    skill_set_id: string,
    skill_set_index: string,
    skill_points: string,
    name: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('skillCategory');

