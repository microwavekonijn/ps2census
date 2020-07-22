import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    fire_group_id: string,
    fire_mode_id: string,
    fire_mode_index: string,
};

export type query = {
    fire_group_id: string,
    fire_mode_id: string,
    fire_mode_index: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('fireGroupToFireMode');
