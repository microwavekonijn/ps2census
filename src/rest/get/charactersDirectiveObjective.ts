import { defineCensusType } from '../get';

export type charactersDirectiveObjectiveData = {
    character_id: string,
    directive_id: string,
    objective_id: string,
    objective_group_id: string,
    status: string,
    state_data: string,
};

export type charactersDirectiveObjectiveQuery = Partial<charactersDirectiveObjectiveData>

export default defineCensusType<charactersDirectiveObjectiveQuery, charactersDirectiveObjectiveData[]>('characters_directive_objective');
