import { requestFactory } from '../utils/requestHelpers';

export { playerState as playerStateFormat } from '../formats/playerState';

export type playerStateQuery = Partial<{
    description: string,
    player_state_id: string
}>;

export const playerState = requestFactory('player_state');
