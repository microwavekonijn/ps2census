import { requestFactory } from '../utils/requestHelpers';
import skillLine from '../types/skillLine';

export type typeData = skillLine;

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
    skill_category_index: string,
    skill_line_id: string,
    skill_points: string
}>;

export default requestFactory<'skill_line'>('skill_line');
