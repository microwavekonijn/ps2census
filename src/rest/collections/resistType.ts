import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import resistType from '../types/resistType';

export type typeData = resistType;

export type query = Partial<{
    description: string,
    resist_type_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('resist_type');
