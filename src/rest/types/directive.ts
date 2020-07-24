import { lang } from '../utils/Types';

export default directive;

type directive = {
    directive_id: string,
    directive_tree_id: string,
    directive_tier_id: string,
    objective_set_id: string,
    name: lang,
    description: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
};
