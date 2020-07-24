import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import worldEvent from '../types/worldEvent';

export type typeData = worldEvent;

export type query = {
    after: string,
    before: string,
    id: string,
    type: string,
    world_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('world_event');
