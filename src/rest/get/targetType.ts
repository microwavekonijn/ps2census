import { defineCensusType } from '../get';

export type targetTypeData = {
    target_type_id: string,
    description: string,
};

export type targetTypeQuery = Partial<targetTypeData>

export default defineCensusType<targetTypeQuery, targetTypeData[]>('target_type');
