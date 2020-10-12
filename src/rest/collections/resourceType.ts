import { requestFactory } from '../utils/requestHelpers';

export { resourceType as resourceTypeFormat } from '../formats/resourceType';

export type resourceTypeQuery = Partial<{
    description: string,
    resource_type_id: string
}>;

export const resourceType = requestFactory('resource_type');
