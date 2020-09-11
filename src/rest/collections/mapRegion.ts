import { requestFactory } from '../utils/requestHelpers';
import mapRegion from '../types/mapRegion';

export type typeData = mapRegion;

export type query = Partial<{
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

export default requestFactory<'map_region'>('map_region');
