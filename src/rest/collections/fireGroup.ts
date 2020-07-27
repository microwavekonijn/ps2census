import { requestFactory } from '../utils/Helpers';
import fireGroup from '../types/fireGroup';

export type typeData = fireGroup;

export type query = Partial<{
    can_chamber_ironsights: string,
    chamber_duration_ms: string,
    fire_group_id: string,
    spool_up_initial_refire_ms: string,
    spool_up_ms: string,
    transition_duration_ms: string
}>;

export default requestFactory<'fire_group'>('fire_group');
