import { DefaultCollection } from '../types/collection';
import { profile } from '../formats/profile';

export interface Profile extends DefaultCollection {
    collection: 'profile';

    format: profile;

    conditions: Partial<{
        backpedal_speed_modifier: string,
        description: string,
        'description.de': string,
        'description.en': string,
        'description.es': string,
        'description.fr': string,
        'description.it': string,
        'description.tr': string,
        faction_id: string,
        image_id: string,
        image_path: string,
        image_set_id: string,
        movement_speed: string,
        name: string,
        'name.de': string,
        'name.en': string,
        'name.es': string,
        'name.fr': string,
        'name.it': string,
        'name.tr': string,
        profile_id: string,
        profile_type_description: string,
        profile_type_id: string,
        sprint_speed_modifier: string,
        strafe_speed_modifier: string
    }>;
}
