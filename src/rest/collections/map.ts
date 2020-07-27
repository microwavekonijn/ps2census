import { requestFactory } from '../utils/Helpers';
import map from '../types/map';

export type typeData = map;

export type query = {
    world_id: string,
    zone_ids: string
};

export default requestFactory<'map'>('map');
