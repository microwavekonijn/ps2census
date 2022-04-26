export type MapRegion = {
  collection: 'map_region';
  format: {
    map_region_id: string;
    zone_id: string;
    facility_id: string;
    facility_name: string;
    facility_type_id: string;
    facility_type: string;
    location_x: string;
    location_y: string;
    location_z: string;
    reward_amount: string;
    reward_currency_id: string;
  };
  paths:
    | 'map_region_id'
    | 'zone_id'
    | 'facility_id'
    | 'facility_name'
    | 'facility_type_id'
    | 'facility_type'
    | 'location_x'
    | 'location_y'
    | 'location_z'
    | 'reward_amount'
    | 'reward_currency_id';
  partialPaths:
    | 'map_region_id'
    | 'zone_id'
    | 'facility_id'
    | 'facility_name'
    | 'facility_type_id'
    | 'facility_type'
    | 'location_x'
    | 'location_y'
    | 'location_z'
    | 'reward_amount'
    | 'reward_currency_id';
  conditions: {
    facility_id?: string;
    facility_name?: string;
    facility_type?: string;
    facility_type_id?: string;
    location_x?: string;
    location_y?: string;
    location_z?: string;
    map_region_id?: string;
    reward_amount?: string;
    reward_currency_id?: string;
    zone_id?: string;
  };
};
