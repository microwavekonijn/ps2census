import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import map from '../types/map';

export type typeData = map;

export type query = Partial<{
    world_id: string,
    zone_ids: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('map');
