import { defineCensusType } from './Base';

export type playerStateGroupData = {
    player_state_group_id: string,
    player_state: string,
    min_cone_of_fire: string,
};

export type playerStateGroupQuery = Partial<playerStateGroupData>

export default defineCensusType<playerStateGroupQuery, playerStateGroupData[]>('player_state_group');
