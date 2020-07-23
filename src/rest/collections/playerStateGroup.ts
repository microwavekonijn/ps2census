import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    player_state_group_id: string,
    player_state: string,
    min_cone_of_fire: string,
};

export type query = {
    min_cone_of_fire: string,
    player_state: string,
    player_state_group_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('player_state_group');
