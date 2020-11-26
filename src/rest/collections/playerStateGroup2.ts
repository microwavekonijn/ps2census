import { DefaultCollection } from '../types/collection';
import { playerStateGroup2 } from '../formats/playerStateGroup2';

export interface PlayerStateGroup2 extends DefaultCollection {
    collection: 'player_state_group_2';

    format: playerStateGroup2;

    conditions: Partial<{
        can_iron_sight: string,
        cof_grow_rate: string,
        cof_max: string,
        cof_min: string,
        cof_recovery_delay_ms: string,
        cof_recovery_delay_threshold: string,
        cof_recovery_rate: string,
        cof_shots_before_penalty: string,
        cof_turn_penalty: string,
        player_state_group_id: string,
        player_state_id: string
    }>;
}
