import { defineCensusType } from '../get';

export type resistTypeData = {
    resist_type_id: string,
    description: string,
};

export type resistTypeQuery = Partial<resistTypeData>

export default defineCensusType<resistTypeQuery, resistTypeData[]>('resist_type');
