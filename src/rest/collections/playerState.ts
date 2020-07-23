import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    player_state_id: string,
    description: string,
};

export type query = {
    description: string,
    player_state_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('player_state');
