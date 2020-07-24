import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import directiveTreeCategory from '../types/directiveTreeCategory';

export type typeData = directiveTreeCategory;

export type query = {
    directive_tree_category_id: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('directive_tree_category');
