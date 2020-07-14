import { defineCensusType } from './Base';
import { lang } from './types/base';

export type directiveTierData = {
    directive_tree_id: string,
    directive_tier_id: string,
    directive_points: string,
    completion_count: string,
    name: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
};

export type directiveTierQuery = Partial<directiveTierData>

export default defineCensusType<directiveTierQuery, directiveTierData[]>('directive_tier');
