import { DefaultCollection } from '../types/collection';
import { resourceType } from '../formats/resourceType';

export interface ResourceType extends DefaultCollection {
    collection: 'resource_type';

    format: resourceType;

    conditions: Partial<{
        description: string,
        resource_type_id: string
    }>;
}
