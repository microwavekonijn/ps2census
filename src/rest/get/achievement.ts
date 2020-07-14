import { defineCensusType } from '../Base';
import { lang } from '../types/base';

export type achievementData = {
    achievement_id: string,
    item_id: string,
    objective_group_id: string,
    reward_id: string,
    repeatable: string,
    name: lang,
    description: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
};

export type achievementQuery = Partial<achievementData>

export default defineCensusType<achievementQuery, achievementData[]>('achievement');
