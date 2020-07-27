import { requestFactory } from '../utils/Helpers';
import objectiveSetToObjective from '../types/objectiveSetToObjective';

export type typeData = objectiveSetToObjective;

export type query = Partial<{
    objective_group_id: string,
    objective_set_id: string
}>;

export type resolve = never;

export default requestFactory<'objective_set_to_objective'>('objective_set_to_objective');
