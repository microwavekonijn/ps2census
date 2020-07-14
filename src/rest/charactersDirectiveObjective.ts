import { defineCensusType } from './Base';

export type charactersDirectiveObjectiveData = {
    character_id: string,
    directive_id: string,
    objective_id: string,
    objective_group_id: string,
    status: string,
    state_data: string
};

export default defineCensusType<Partial<charactersDirectiveObjectiveData>, charactersDirectiveObjectiveData[]>('characters_directive_objective');
