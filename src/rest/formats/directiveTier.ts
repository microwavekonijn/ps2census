import { lang } from '../utils/responseTypes';

export type directiveTier = {
    directive_tree_id: string,
    directive_tier_id: string,
    directive_points: string,
    completion_count: string,
    name: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
    [prop: string]: any,
};
