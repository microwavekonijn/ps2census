import { Lang } from '../types/response';

export interface directive  {
    directive_id: string;
    directive_tree_id: string;
    directive_tier_id: string;
    objective_set_id: string;
    name: Lang;
    description: Lang;
    image_set_id: string;
    image_id: string;
    image_path: string;
    [prop: string]: unknown;
}
