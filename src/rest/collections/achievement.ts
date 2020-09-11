import { requestFactory } from '../utils/requestHelpers';
import achievement from '../types/achievement';

export type typeData = achievement;

export type query = Partial<{
    achievement_id: string,
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
    item_id: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    objective_group_id: string,
    repeatable: string,
    reward_id: string
}>;

export default requestFactory<'achievement'>('achievement');
