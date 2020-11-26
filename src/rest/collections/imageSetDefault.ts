import { DefaultCollection } from '../types/collection';
import { imageSetDefault } from '../formats/imageSetDefault';

export interface ImageSetDefault extends DefaultCollection {
    collection: 'image_set_default';

    format: imageSetDefault;

    conditions: Partial<{
        description: string,
        image_id: string,
        image_path: string,
        image_set_id: string,
        type_description: string,
        type_id: string
    }>;
}
