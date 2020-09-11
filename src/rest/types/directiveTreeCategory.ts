import { lang } from '../utils/responseTypes';

export default directiveTreeCategory;

type directiveTreeCategory = {
    directive_tree_category_id: string,
    name: lang,
    [prop: string]: any,
};
