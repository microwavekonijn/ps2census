import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import mapHex from '../types/mapHex';

export type typeData = mapHex;

export type query = Partial<{
    hex_type: string,
    map_region_id: string,
    type_name: string,
    x: string,
    y: string,
    zone_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('map_hex');
