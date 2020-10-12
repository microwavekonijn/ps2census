import { requestFactory } from '../utils/requestHelpers';

export { weaponToFireGroup as weaponToFireGroupFormat } from '../formats/weaponToFireGroup';

export type weaponToFireGroupQuery = Partial<{
    fire_group_id: string,
    fire_group_index: string,
    weapon_id: string
}>;

export const weaponToFireGroup = requestFactory<'weapon_to_fire_group'>('weapon_to_fire_group');
