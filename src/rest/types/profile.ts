import { requestFactory } from '../utils/Helpers';
import { commands, lang, operations } from '../utils/Types';

export type typeData = {
    profile_id: string,
    profile_type_id: string,
    profile_type_description: string,
    faction_id: string,
    name: lang,
    description: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
    movement_speed: string,
    backpedal_speed_modifier: string,
    sprint_speed_modifier: string,
    strafe_speed_modifier: string,
};

export type query = {
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
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('profile');
