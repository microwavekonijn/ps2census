import { requestFactory } from '../utils/Helpers';
import playerStateGroup from '../types/playerStateGroup';

export type typeData = playerStateGroup;

export type query = Partial<{
    min_cone_of_fire: string,
    player_state: string,
    player_state_group_id: string
}>;

export type resolve = never;

export default requestFactory<'player_state_group'>('player_state_group');
