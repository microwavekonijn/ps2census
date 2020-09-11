import { lang } from '../utils/responseTypes';

export default directiveTree;

type directiveTree = {
    directive_tree_id: string,
    directive_tree_category_id: string,
    name: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
    [prop: string]: any,
};
