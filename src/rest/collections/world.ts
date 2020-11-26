import { DefaultCollection } from '../types/collection';
import { world } from '../formats/world';

export interface World extends DefaultCollection {
    collection: 'world';

    format: world;

    conditions: Partial<{
        // this API man...
        description_t4id: number, // integer
        name_t4id: number, // integer
        state: string,
        world_id: string,
    }>;
}
