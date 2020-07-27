import { requestFactory } from '../utils/Helpers';
import playerState from '../types/playerState';

export type typeData = playerState;

export type query = Partial<{
    description: string,
    player_state_id: string
}>;

export default requestFactory<'player_state'>('player_state');
