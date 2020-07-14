import { defineCensusType } from './Base';
import { lang } from './types/base';

export type directiveTreeData = {
    directive_tree_id: string,
    directive_tree_category_id: string,
    name: lang,
    image_set_id: string,
    image_id: string,
    image_path: string
};

export default defineCensusType<Partial<directiveTreeData>, directiveTreeData[]>('directive_tree');
