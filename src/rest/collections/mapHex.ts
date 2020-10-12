import { requestFactory } from '../utils/requestHelpers';
import { mapHex } from '../types/mapHex';

export type typeData = mapHex;

export type query = Partial<{
    hex_type: string,
    map_region_id: string,
    type_name: string,
    x: string,
    y: string,
    zone_id: string
}>;

export const mapHex = requestFactory<'map_hex'>('map_hex');
