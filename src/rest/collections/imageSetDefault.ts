import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    image_set_id: string,
    image_id: string,
    description: string,
    type_id: string,
    type_description: string,
    image_path: string,
};

export type query = {
    description: string,
    image_id: string,
    image_path: string,
    image_set_id: string,
    type_description: string,
    type_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('image_set_default');
