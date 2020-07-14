import { defineCensusType } from './Base';

export type profileArmorMapData = {
    profile_id: string,
    armor_info_id: string,
    rank: string,
};

export type profileArmorMapQuery = Partial<profileArmorMapData>

export default defineCensusType<profileArmorMapQuery, profileArmorMapData[]>('profile_armor_map');
