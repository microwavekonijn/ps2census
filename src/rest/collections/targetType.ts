import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import targetType from '../types/targetType';

export type typeData = targetType;

export type query = {
    description: string,
    target_type_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('target_type');
