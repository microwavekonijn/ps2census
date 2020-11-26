import { DefaultCollection } from '../types/collection';
import { directive } from '../formats/directive';

export interface Directive extends DefaultCollection {
    collection: 'directive';

    format: directive;

    conditions: Partial<{
        description: string,
        'description.de': string,
        'description.en': string,
        'description.es': string,
        'description.fr': string,
        'description.it': string,
        'description.tr': string,
        directive_id: string,
        directive_tier_id: string,
        directive_tree_id: string,
        image_id: string,
        image_path: string,
        image_set_id: string,
        name: string,
        'name.de': string,
        'name.en': string,
        'name.es': string,
        'name.fr': string,
        'name.it': string,
        'name.tr': string,
        objective_set_id: string,
        qualify_requirement_id: string
    }>;
}
