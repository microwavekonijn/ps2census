import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
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

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('playerStateGroup2');

