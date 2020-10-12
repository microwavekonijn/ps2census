import { requestFactory } from '../utils/requestHelpers';

export { mapRegion as mapRegionFormat } from '../formats/mapRegion';

export type mapRegionQuery = Partial<{
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

export const mapRegion = requestFactory('map_region');
