import { DefaultCollection } from '../types/collection';
import { imageSet } from '../formats/imageSet';

export interface ImageSet extends DefaultCollection {
    collection: 'image_set';

    format: imageSet;

    conditions: Partial<{
        description: string,
        image_id: string,
        image_path: string,
        image_set_id: string,
        type_description: string,
        type_id: string
    }>;
}
