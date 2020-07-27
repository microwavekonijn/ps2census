import { requestFactory } from '../utils/Helpers';
import image from '../types/image';

export type typeData = image;

export type query = Partial<{
    description: string,
    image_id: string,
    path: string
}>;

export type resolve = never;

export default requestFactory<'image'>('image');
