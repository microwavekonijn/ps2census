import { requestFactory } from '../utils/requestHelpers';

export { mapHex as mapHexFormat } from '../formats/mapHex';

export type mapHexQuery = Partial<{
    hex_type: string,
    map_region_id: string,
    type_name: string,
    x: string,
    y: string,
    zone_id: string
}>;

export const mapHex = requestFactory('map_hex');
