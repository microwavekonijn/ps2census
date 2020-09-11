import { requestFactory } from '../utils/requestHelpers';
import resistType from '../types/resistType';

export type typeData = resistType;

export type query = Partial<{
    description: string,
    resist_type_id: string
}>;

export default requestFactory<'resist_type'>('resist_type');
