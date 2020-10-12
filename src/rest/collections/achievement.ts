import { requestFactory } from '../utils/requestHelpers';

export { achievement as achievementFormat } from '../formats/achievement';

export type achievementQuery = Partial<{
    achievement_id: string,
    description: string,
    'description.de': string,
    'description.en': string,
    'description.es': string,
    'description.fr': string,
    'description.it': string,
    'description.tr': string,
    image_id: string,
    image_path: string,
    image_set_id: string,
    item_id: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    objective_group_id: string,
    repeatable: string,
    reward_id: string
}>;

export const achievement = requestFactory('achievement');
