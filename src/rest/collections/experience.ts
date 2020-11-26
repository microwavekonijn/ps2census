import { DefaultCollection } from '../types/collection';
import { experience } from '../formats/experience';

export interface Experience extends DefaultCollection {
    collection: 'experience';

    format: experience;

    conditions: Partial<{
        description: string,
        experience_id: string,
        xp: string
    }>;
}
