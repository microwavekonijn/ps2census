import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    fire_mode_type_id: string,
    description: string,
};

export type query = {
    description: string,
    fire_mode_type_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('fire_mode_type');
