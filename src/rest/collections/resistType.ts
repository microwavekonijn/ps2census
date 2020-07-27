import { requestFactory } from '../utils/Helpers';
import resistType from '../types/resistType';

export type typeData = resistType;

export type query = Partial<{
    description: string,
    resist_type_id: string
}>;

export type resolve = never;

export default requestFactory<'resist_type'>('resist_type');
