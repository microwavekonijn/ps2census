import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    weapon_id: string,
    fire_group_id: string,
    fire_group_index: string,
};

export type query = {
    fire_group_id: string,
    fire_group_index: string,
    weapon_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('weaponToFireGroup');
