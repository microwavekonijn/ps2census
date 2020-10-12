import { requestFactory } from '../utils/requestHelpers';
import { imageSetDefault } from '../types/imageSetDefault';

export type typeData = imageSetDefault;

export type query = Partial<{
    description: string,
    image_id: string,
    image_path: string,
    image_set_id: string,
    type_description: string,
    type_id: string
}>;

export const imageSetDefault = requestFactory<'image_set_default'>('image_set_default');
