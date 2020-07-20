import { defineCensusType } from '../get';

export type profileResistMapData = {
    profile_id: string,
    resist_info_id: string,
    rank: string,
};

export type profileResistMapQuery = Partial<profileResistMapData>

export default defineCensusType<profileResistMapQuery, profileResistMapData[]>('profile_resist_map');
