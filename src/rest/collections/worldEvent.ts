import { requestFactory } from '../utils/Helpers';
import { commands as baseCommands } from '../utils/Types';
import worldEvent from '../types/worldEvent';

export type typeData = worldEvent;

export type query = { world_id: string } & Partial<{
    after: string,
    before: string,
    id: string,
    type: string,
}>;

export type resolve = never;

export type commands = Extract<baseCommands, 'limit' | 'join' | 'tree'>;

export default requestFactory<'get', query, typeData[], commands, resolve>('world_event');
