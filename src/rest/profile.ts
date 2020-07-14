import { defineCensusType } from './Base';
import { lang } from './types/base';

export type profileData = {
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

export type profileQuery = Partial<profileData>

export default defineCensusType<profileQuery, profileData[]>('profile');
