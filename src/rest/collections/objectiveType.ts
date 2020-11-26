import { DefaultCollection } from '../types/collection';
import { objectiveType } from '../formats/objectiveType';

export interface ObjectiveType extends DefaultCollection {
    collection: 'objective_type';

    format: objectiveType;

    conditions: Partial<{
        description: string,
        objective_type_id: string,
        param1: string,
        param2: string,
        param3: string,
        param4: string,
        param5: string,
        param6: string,
        param7: string,
        param8: string,
        param9: string
    }>;
}
