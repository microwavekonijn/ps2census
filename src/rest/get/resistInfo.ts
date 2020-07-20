import { defineCensusType } from '../get';

export type resistInfoData = {
    resist_info_id: string,
    resist_type_id: string,
    resist_percent: string,
    multiplier_when_headshot: string,
    description: string,
};

export type resistInfoQuery = Partial<resistInfoData>

export default defineCensusType<resistInfoQuery, resistInfoData[]>('resist_info');
