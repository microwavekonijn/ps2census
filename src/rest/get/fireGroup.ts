import { defineCensusType } from '../get';

export type fireGroupData = {
    fire_group_id: string,
};

export type fireGroupQuery = Partial<fireGroupData>

export default defineCensusType<fireGroupQuery, fireGroupData[]>('fire_group');
