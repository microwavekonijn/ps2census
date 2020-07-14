import { defineCensusType } from '../Base';
import { lang } from '../types/base';

export type skillData = {
    skill_id: string,
    skill_line_id: string,
    skill_line_index: string,
    skill_points: string,
    grant_item_id: string,
    name: lang,
    description: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
};

export type skillQuery = Partial<skillData>

export default defineCensusType<skillQuery, skillData[]>('skill');
