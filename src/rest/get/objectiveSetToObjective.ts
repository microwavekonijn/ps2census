import { defineCensusType } from '../get';

export type objectiveSetToObjectiveData = {
    objective_set_id: string,
    objective_group_id: string,
};

export type objectiveSetToObjectiveQuery = Partial<objectiveSetToObjectiveData>

export default defineCensusType<objectiveSetToObjectiveQuery, objectiveSetToObjectiveData[]>('objective_set_to_objective');
