import { requestFactory } from '../utils/Helpers';
import imageSetDefault from '../types/imageSetDefault';

export type typeData = imageSetDefault;

export type query = Partial<{
    description: string,
    image_id: string,
    image_path: string,
    image_set_id: string,
    type_description: string,
    type_id: string
}>;

export type resolve = never;

export default requestFactory<'image_set_default'>('image_set_default');
