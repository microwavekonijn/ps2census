import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import image from '../types/image';

export type typeData = image;

export type query = {
    description: string,
    image_id: string,
    path: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('image');
