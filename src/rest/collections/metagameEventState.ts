import { requestFactory } from '../utils/requestHelpers';
import metagameEventState from '../types/metagameEventState';

export type typeData = metagameEventState;

export type query = Partial<{
    metagame_event_state_id: string,
    name: string
}>;

export default requestFactory<'metagame_event_state'>('metagame_event_state');
