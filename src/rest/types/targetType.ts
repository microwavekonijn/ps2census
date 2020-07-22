import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    target_type_id: string,
    description: string,
};

export type query = {
    description: string,
    target_type_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('targetType');
