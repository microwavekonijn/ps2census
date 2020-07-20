import { defineCensusType } from '../get';

export type playerStateGroup2Data = {
    player_state_group_id: string,
    player_state_id: string,
    can_iron_sight: string,
    cof_grow_rate: string,
    cof_max: string,
    cof_min: string,
    cof_recovery_delay_ms: string,
    cof_recovery_rate: string,
    cof_shots_before_penalty: string,
    cof_recovery_delay_threshold: string,
    cof_turn_penalty: string,
};

export type playerStateGroup2Query = Partial<playerStateGroup2Data>

export default defineCensusType<playerStateGroup2Query, playerStateGroup2Data[]>('player_state_group_2');
