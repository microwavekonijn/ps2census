import { DefaultCollection } from '../types/collection';
import { image } from '../formats/image';

export interface Image extends DefaultCollection {
    collection: 'image';

    format: image;

    conditions: Partial<{
        description: string,
        image_id: string,
        path: string
    }>;
}
