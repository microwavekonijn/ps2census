import { DefaultCollection } from '../types/collection';
import { directiveTreeCategory } from '../formats/directiveTreeCategory';

export interface DirectiveTreeCategory extends DefaultCollection {
    collection: 'directive_tree_category';

    format: directiveTreeCategory;

    conditions: Partial<{
        directive_tree_category_id: string,
        name: string,
        'name.de': string,
        'name.en': string,
        'name.es': string,
        'name.fr': string,
        'name.it': string,
        'name.tr': string
    }>;
}
