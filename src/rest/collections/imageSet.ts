import { requestFactory } from '../utils/requestHelpers';

export { imageSet as imageSetFormat } from '../formats/imageSet';

export type imageSetQuery = Partial<{
    description: string,
    image_id: string,
    image_path: string,
    image_set_id: string,
    type_description: string,
    type_id: string
}>;

export const imageSet = requestFactory<'image_set'>('image_set');
