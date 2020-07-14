import { defineCensusType } from './Base';

export type weaponToFireGroupData = {
    weapon_id: string,
    fire_group_id: string,
    fire_group_index: string,
};

export type weaponToFireGroupQuery = Partial<weaponToFireGroupData>

export default defineCensusType<weaponToFireGroupQuery, weaponToFireGroupData[]>('weapon_to_fire_group');
