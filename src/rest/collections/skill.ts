import { requestFactory } from '../utils/requestHelpers';

export { skill as skillFormat } from '../formats/skill';

export type skillQuery = Partial<{
    description: string,
    'description.de': string,
    'description.en': string,
    'description.es': string,
    'description.fr': string,
    'description.it': string,
    'description.tr': string,
    grant_item_id: string,
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
    skill_id: string,
    skill_line_id: string,
    skill_line_index: string,
    skill_points: string
}>;

export const skill = requestFactory<'skill'>('skill');
