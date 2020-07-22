import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    fire_group_id: string,
};

export type query = {
    can_chamber_ironsights: string,
    chamber_duration_ms: string,
    fire_group_id: string,
    spool_up_initial_refire_ms: string,
    spool_up_ms: string,
    transition_duration_ms: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('fireGroup');
