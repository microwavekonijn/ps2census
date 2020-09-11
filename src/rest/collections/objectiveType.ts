import { requestFactory } from '../utils/requestHelpers';
import objectiveType from '../types/objectiveType';

export type typeData = objectiveType;

export type query = Partial<{
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

export default requestFactory<'objective_type'>('objective_type');
