import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import imageSet from '../types/imageSet';

export type typeData = imageSet;

export type query = Partial<{
    description: string,
    image_id: string,
    image_path: string,
    image_set_id: string,
    type_description: string,
    type_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('image_set');
