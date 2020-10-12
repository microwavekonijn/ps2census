import { requestFactory } from '../utils/requestHelpers';

export { objectiveType as objectiveTypeFormat } from '../formats/objectiveType';

export type objectiveTypeQuery = Partial<{
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

export const objectiveType = requestFactory<'objective_type'>('objective_type');
