import { DefaultCollection } from '../types/collection';
import { skillCategory } from '../formats/skillCategory';

export interface SkillCategory extends DefaultCollection {
    collection: 'skill_category';

    format: skillCategory;

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
        skill_category_id: string,
        skill_points: string,
        skill_set_id: string,
        skill_set_index: string
    }>;
}
