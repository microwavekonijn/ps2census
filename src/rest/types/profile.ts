import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

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

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('profile');
