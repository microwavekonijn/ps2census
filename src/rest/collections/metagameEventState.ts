import { requestFactory } from '../utils/requestHelpers';

export { metagameEventState as metagameEventStateFormat } from '../formats/metagameEventState';

export type metagameEventStateQuery = Partial<{
    metagame_event_state_id: string,
    name: string
}>;

export const metagameEventState = requestFactory<'metagame_event_state'>('metagame_event_state');
