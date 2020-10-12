import { requestFactory } from '../utils/requestHelpers';

export { playerStateGroup as playerStateGroupFormat } from '../formats/playerStateGroup';

export type playerStateGroupQuery = Partial<{
    min_cone_of_fire: string,
    player_state: string,
    player_state_group_id: string
}>;

export const playerStateGroup = requestFactory('player_state_group');
