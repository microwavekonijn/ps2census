import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    fire_mode_type_id: string,
    description: string,
};

export type query = {
    description: string,
    fire_mode_type_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('fireModeType');
