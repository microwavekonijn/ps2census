import { defineCensusType } from './Base';

export type mapHexData = {
    zone_id: string,
    map_region_id: string,
    x: string,
    y: string,
    hex_type: string,
    type_name: string,
};

export type mapHexQuery = Partial<mapHexData>

export default defineCensusType<mapHexQuery, mapHexData[]>('map_hex');
