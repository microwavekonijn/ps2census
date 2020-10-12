import { requestFactory } from '../utils/requestHelpers';
import { directiveTreeCategory } from '../types/directiveTreeCategory';

export type typeData = directiveTreeCategory;

export type query = Partial<{
    directive_tree_category_id: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string
}>;

export const directiveTreeCategory = requestFactory<'directive_tree_category'>('directive_tree_category');
