import { requestFactory } from '../utils/requestHelpers';
import { targetType } from '../types/targetType';

export type typeData = targetType;

export type query = Partial<{
    description: string,
    target_type_id: string
}>;

export const targetType = requestFactory<'target_type'>('target_type');
