import { Lang } from '../types/response';

export interface directiveTree  {
    directive_tree_id: string;
    directive_tree_category_id: string;
    name: Lang;
    image_set_id: string;
    image_id: string;
    image_path: string;
    [prop: string]: unkown;
}
