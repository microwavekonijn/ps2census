import { DefaultCollection } from '../types/collection';
import { objective } from '../formats/objective';

export interface Objective extends DefaultCollection {
    collection: 'objective';

    format: objective;

    conditions: Partial<{
        objective_group_id: string,
        objective_id: string,
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
