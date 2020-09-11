import { requestFactory } from '../utils/requestHelpers';
import playerStateGroup2 from '../types/playerStateGroup2';

export type typeData = playerStateGroup2;

export type query = Partial<{
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

export default requestFactory<'player_state_group_2'>('player_state_group_2');
