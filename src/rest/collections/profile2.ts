import { DefaultCollection } from '../types/collection';
import { profile2 } from '../formats/profile2';

export interface Profile2 extends DefaultCollection {
    collection: 'profile_2';

    format: profile2;

    conditions: Partial<{
        description: string,
        profile_id: string
    }>;
}
