import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import directiveTier from '../types/directiveTier';

export type typeData = directiveTier;

export type query = Partial<{
    completion_count: string,
    directive_points: string,
    directive_tier_id: string,
    directive_tree_id: string,
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
    reward_set_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('directive_tier');
