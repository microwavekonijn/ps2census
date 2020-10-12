import { requestFactory } from '../utils/requestHelpers';

export { worldEvent as worldEventFormat } from '../formats/worldEvent';

export type worldEventQuery = { world_id: string } & Partial<{
    after: string,
    before: string,
    id: string,
    type: string,
}>;

export const worldEvent = requestFactory<'world_event'>('world_event');
