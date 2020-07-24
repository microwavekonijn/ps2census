import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import resourceType from '../types/resourceType';

export type typeData = resourceType;

export type query = Partial<{
    description: string,
    resource_type_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('resource_type');
