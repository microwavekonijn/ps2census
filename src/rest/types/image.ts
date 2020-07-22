import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    image_id: string,
    path: string,
};

export type query = {
    description: string,
    image_id: string,
    path: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('image');
