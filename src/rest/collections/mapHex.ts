import { DefaultCollection } from '../types/collection';
import { mapHex } from '../formats/mapHex';

export interface MapHex extends DefaultCollection {
    collection: 'map_hex';

    format: mapHex;

    conditions: Partial<{
        hex_type: string,
        map_region_id: string,
        type_name: string,
        x: string,
        y: string,
        zone_id: string
    }>;
}
