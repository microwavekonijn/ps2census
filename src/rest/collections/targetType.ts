import { requestFactory } from '../utils/requestHelpers';

export { targetType as targetTypeFormat } from '../formats/targetType';

export type targetTypeQuery = Partial<{
    description: string,
    target_type_id: string
}>;

export const targetType = requestFactory<'target_type'>('target_type');
