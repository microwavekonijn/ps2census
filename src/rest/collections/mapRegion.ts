import { DefaultCollection } from '../types/collection';
import { mapRegion } from '../formats/mapRegion';

export interface MapRegion extends DefaultCollection {
    collection: 'map_region';

    format: mapRegion;

    conditions: Partial<{
        facility_id: string,
        facility_name: string,
        facility_type: string,
        facility_type_id: string,
        location_x: string,
        location_y: string,
        location_z: string,
        map_region_id: string,
        reward_amount: string,
        reward_currency_id: string,
        zone_id: string
    }>;
}
