import { requestFactory } from '../utils/Helpers';
import { commands as baseCommands } from '../utils/Types';
import map from '../types/map';

export type typeData = map;

export type query = {
    world_id: string,
    zone_ids: string
};

export type resolve = never;

export type commands = Extract<baseCommands, 'join' | 'tree'>;

export default requestFactory<'get', query, typeData[], commands, resolve>('map');
