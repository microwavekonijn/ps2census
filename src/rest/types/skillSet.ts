import { lang } from '../utils/Types';

export default skillSet;

type skillSet = {
    skill_set_id: string,
    skill_points: string,
    required_item_id: string,
    name: lang,
    description: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
    [prop: string]: any,
};
