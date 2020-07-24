import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import weaponToFireGroup from '../types/weaponToFireGroup';

export type typeData = weaponToFireGroup;

export type query = {
    fire_group_id: string,
    fire_group_index: string,
    weapon_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('weapon_to_fire_group');
