import { defineCensusType } from '../get';
import { lang } from '../types/lang';

export type directiveTreeData = {
    directive_tree_id: string,
    directive_tree_category_id: string,
    name: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
};

export type directiveTreeQuery = Partial<directiveTreeData>

export default defineCensusType<directiveTreeQuery, directiveTreeData[]>('directive_tree');
