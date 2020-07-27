import { requestFactory } from '../utils/Helpers';
import resourceType from '../types/resourceType';

export type typeData = resourceType;

export type query = Partial<{
    description: string,
    resource_type_id: string
}>;

export default requestFactory<'resource_type'>('resource_type');
