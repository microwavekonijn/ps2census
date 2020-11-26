import { DefaultCollection } from '../types/collection';
import { targetType } from '../formats/targetType';

export interface TargetType extends DefaultCollection {
    collection: 'target_type';

    format: targetType;

    conditions: Partial<{
        description: string,
        target_type_id: string
    }>;
}
