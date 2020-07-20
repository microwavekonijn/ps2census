import { defineCensusType } from '../get';

export type playerStateData = {
    player_state_id: string,
    description: string,
};

export type playerStateQuery = Partial<playerStateData>

export default defineCensusType<playerStateQuery, playerStateData[]>('player_state');
