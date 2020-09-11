import { requestFactory } from '../utils/requestHelpers';
import skillSet from '../types/skillSet';

export type typeData = skillSet;

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
    required_item_id: string,
    skill_points: string,
    skill_set_id: string
}>;

export default requestFactory<'skill_set'>('skill_set');
