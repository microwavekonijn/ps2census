import { DefaultCollection } from '../types/collection';
import { resistType } from '../formats/resistType';

export interface ResistType extends DefaultCollection {
    collection: 'resist_type';

    format: resistType;

    conditions: Partial<{
        description: string,
        resist_type_id: string
    }>;
}
