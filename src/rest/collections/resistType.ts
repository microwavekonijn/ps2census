import { requestFactory } from '../utils/requestHelpers';

export { resistType as resistTypeFormat } from '../formats/resistType';

export type resistTypeQuery = Partial<{
    description: string,
    resist_type_id: string
}>;

export const resistType = requestFactory('resist_type');
