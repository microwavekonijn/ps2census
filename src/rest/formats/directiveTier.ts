import { Lang } from '../types/response';

export interface directiveTier {
    directive_tree_id: string;
    directive_tier_id: string;
    directive_points: string;
    completion_count: string;
    name: Lang;
    image_set_id: string;
    image_id: string;
    image_path: string;
}
