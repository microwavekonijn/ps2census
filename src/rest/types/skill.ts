import { lang } from '../utils/Types';

export default skill;

type skill = {
    skill_id: string,
    skill_line_id: string,
    skill_line_index: string,
    skill_points: string,
    grant_item_id: string,
    name: lang,
    description: lang,
    image_set_id: string,
    image_id: string,
    image_path: string
};
