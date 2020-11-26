import { DefaultCollection } from '../types/collection';
import { playerStateGroup } from '../formats/playerStateGroup';

export interface PlayerStateGroup extends DefaultCollection {
    collection: 'player_state_group';

    format: playerStateGroup;

    conditions: Partial<{
        min_cone_of_fire: string,
        player_state: string,
        player_state_group_id: string
    }>;
}
