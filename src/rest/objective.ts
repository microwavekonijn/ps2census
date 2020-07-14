import { defineCensusType } from './Base';

export type objectiveData = {
    objective_id: string,
    objective_type_id: string,
    objective_group_id: string,
    param1: string,
    param4: string,
    param5: string,
    param8: string,
};

export type objectiveQuery = Partial<objectiveData>

export default defineCensusType<objectiveQuery, objectiveData[]>('objective');
