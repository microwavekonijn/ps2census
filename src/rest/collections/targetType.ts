import { requestFactory } from '../utils/Helpers';
import targetType from '../types/targetType';

export type typeData = targetType;

export type query = Partial<{
    description: string,
    target_type_id: string
}>;

export default requestFactory<'target_type'>('target_type');
