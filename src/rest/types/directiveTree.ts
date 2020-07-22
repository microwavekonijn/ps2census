import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
    directive_tree_id: string,
    directive_tree_category_id: string,
    name: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
};

export type query = {
    description: string,
    'description.de': string,
    'description.en': string,
    'description.es': string,
    'description.fr': string,
    'description.it': string,
    'description.tr': string,
    directive_tree_category_id: string,
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
    'name.tr': string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('directiveTree');
