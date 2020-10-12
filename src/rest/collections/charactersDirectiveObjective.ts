import { requestFactory } from '../utils/requestHelpers';

export { characterDirectiveObjective as characterDirectiveObjectiveFormat } from '../formats/characterDirectiveObjective';

export type charactersDirectiveObjectiveQuery = Partial<{
    character_id: string,
    directive_id: string,
    objective_group_id: string,
    objective_id: string,
    state_data: string,
    status: string
}>;

export const charactersDirectiveObjective = requestFactory<'characters_directive_objective'>('characters_directive_objective');
