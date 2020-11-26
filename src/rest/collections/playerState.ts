import { DefaultCollection } from '../types/collection';
import { playerState } from '../formats/playerState';

export interface PlayerState extends DefaultCollection {
    collection: 'player_state';

    format: playerState;

    conditions: Partial<{
        description: string,
        player_state_id: string
    }>;
}
