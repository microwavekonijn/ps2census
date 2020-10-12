import { requestFactory } from '../utils/requestHelpers';

export { fireGroup as fireGroupFormat } from '../formats/fireGroup';

export type fireGroupQuery = Partial<{
    can_chamber_ironsights: string,
    chamber_duration_ms: string,
    fire_group_id: string,
    spool_up_initial_refire_ms: string,
    spool_up_ms: string,
    transition_duration_ms: string
}>;

export const fireGroup = requestFactory<'fire_group'>('fire_group');
