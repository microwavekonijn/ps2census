import { defineCensusType } from '../get';
import { lang } from '../types/lang';

export type directiveTreeCategoryData = {
    directive_tree_category_id: string,
    name: lang,
};

export type directiveTreeCategoryQuery = Partial<directiveTreeCategoryData>

export default defineCensusType<directiveTreeCategoryQuery, directiveTreeCategoryData[]>('directive_tree_category');
