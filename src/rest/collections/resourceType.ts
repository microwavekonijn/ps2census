import { requestFactory } from '../utils/requestHelpers';
import { resourceType } from '../types/resourceType';

export type typeData = resourceType;

export type query = Partial<{
    description: string,
    resource_type_id: string
}>;

export const resourceType = requestFactory<'resource_type'>('resource_type');
