export type PlayerStateGroup2 = {
  collection: 'player_state_group_2';
  format: {
    player_state_group_id: string;
    player_state_id: string;
    can_iron_sight: string;
    cof_grow_rate: string;
    cof_max: string;
    cof_min: string;
    cof_recovery_delay_ms: string;
    cof_recovery_rate: string;
    cof_shots_before_penalty: string;
    cof_recovery_delay_threshold: string;
    cof_turn_penalty: string;
  };
  paths:
    | 'player_state_group_id'
    | 'player_state_id'
    | 'can_iron_sight'
    | 'cof_grow_rate'
    | 'cof_max'
    | 'cof_min'
    | 'cof_recovery_delay_ms'
    | 'cof_recovery_rate'
    | 'cof_shots_before_penalty'
    | 'cof_recovery_delay_threshold'
    | 'cof_turn_penalty';
  partialPaths:
    | 'player_state_group_id'
    | 'player_state_id'
    | 'can_iron_sight'
    | 'cof_grow_rate'
    | 'cof_max'
    | 'cof_min'
    | 'cof_recovery_delay_ms'
    | 'cof_recovery_rate'
    | 'cof_shots_before_penalty'
    | 'cof_recovery_delay_threshold'
    | 'cof_turn_penalty';
  conditions: {
    can_iron_sight?: string;
    cof_grow_rate?: string;
    cof_max?: string;
    cof_min?: string;
    cof_recovery_delay_ms?: string;
    cof_recovery_delay_threshold?: string;
    cof_recovery_rate?: string;
    cof_shots_before_penalty?: string;
    cof_turn_penalty?: string;
    player_state_group_id?: string;
    player_state_id?: string;
  };
};
