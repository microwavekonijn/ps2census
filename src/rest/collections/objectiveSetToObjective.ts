import { DefaultCollection } from '../types/collection';
import { objectiveSetToObjective } from '../formats/objectiveSetToObjective';

export interface ObjectiveSetToObjective extends DefaultCollection {
    collection: 'objective_set_to_objective';

    format: objectiveSetToObjective;

    conditions: Partial<{
        objective_group_id: string,
        objective_set_id: string
    }>;
}
