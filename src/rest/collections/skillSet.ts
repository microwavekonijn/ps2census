import { DefaultCollection } from '../types/collection';
import { skillSet } from '../formats/skillSet';

export interface SkillSet extends DefaultCollection {
    collection: 'skill_set';

    format: skillSet;

    conditions: Partial<{
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
        name: string,
        'name.de': string,
        'name.en': string,
        'name.es': string,
        'name.fr': string,
        'name.it': string,
        'name.tr': string,
        required_item_id: string,
        skill_points: string,
        skill_set_id: string
    }>;
}
