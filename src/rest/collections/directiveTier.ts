import { requestFactory } from '../utils/requestHelpers';

export { directiveTier as directiveTierFormat } from '../formats/directiveTier';

export type directiveTierQuery = Partial<{
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

export const directiveTier = requestFactory('directive_tier');
