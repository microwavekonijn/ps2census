import { requestFactory } from '../utils/requestHelpers';

export { objectiveSetToObjective as objectiveSetToObjectiveFormat } from '../formats/objectiveSetToObjective';

export type objectiveSetToObjectiveQuery = Partial<{
    objective_group_id: string,
    objective_set_id: string
}>;

export const objectiveSetToObjective = requestFactory<'objective_set_to_objective'>('objective_set_to_objective');
