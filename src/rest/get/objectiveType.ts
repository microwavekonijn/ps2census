import { defineCensusType } from '../get';

export type objectiveTypeData = {
    objective_type_id: string,
    description: string,
    param1: string,
    param2: string,
    param3: string,
    param4: string,
};

export type objectiveTypeQuery = Partial<objectiveTypeData>

export default defineCensusType<objectiveTypeQuery, objectiveTypeData[]>('objective_type');
