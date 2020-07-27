import { requestFactory } from '../utils/Helpers';
import worldEvent from '../types/worldEvent';

export type typeData = worldEvent;

export type query = { world_id: string } & Partial<{
    after: string,
    before: string,
    id: string,
    type: string,
}>;

export default requestFactory<'world_event'>('world_event');
