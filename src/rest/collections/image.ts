import { requestFactory } from '../utils/requestHelpers';
import image from '../types/image';

export type typeData = image;

export type query = Partial<{
    description: string,
    image_id: string,
    path: string
}>;

export default requestFactory<'image'>('image');
