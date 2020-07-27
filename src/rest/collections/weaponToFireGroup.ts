import { requestFactory } from '../utils/Helpers';
import weaponToFireGroup from '../types/weaponToFireGroup';

export type typeData = weaponToFireGroup;

export type query = Partial<{
    fire_group_id: string,
    fire_group_index: string,
    weapon_id: string
}>;

export type resolve = never;

export default requestFactory<'weapon_to_fire_group'>('weapon_to_fire_group');
