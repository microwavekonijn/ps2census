import { defineCensusType } from './Base';
import { lang } from './types/base';

export type directiveTreeCategoryData = {
    directive_tree_category_id: string,
    name: lang
};

export default defineCensusType<Partial<directiveTreeCategoryData>, directiveTreeCategoryData[]>('directive_tree_category');
