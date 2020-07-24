import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import fireGroupToFireMode from '../types/fireGroupToFireMode';

export type typeData = fireGroupToFireMode;

export type query = Partial<{
    fire_group_id: string,
    fire_mode_id: string,
    fire_mode_index: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('fire_group_to_fire_mode');
