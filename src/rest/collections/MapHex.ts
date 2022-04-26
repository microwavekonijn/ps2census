export type MapHex = {
  collection: 'map_hex';
  format: {
    zone_id: string;
    map_region_id: string;
    x: string;
    y: string;
    hex_type: string;
    type_name: string;
  };
  paths: 'zone_id' | 'map_region_id' | 'x' | 'y' | 'hex_type' | 'type_name';
  partialPaths:
    | 'zone_id'
    | 'map_region_id'
    | 'x'
    | 'y'
    | 'hex_type'
    | 'type_name';
  conditions: {
    hex_type?: string;
    map_region_id?: string;
    type_name?: string;
    x?: string;
    y?: string;
    zone_id?: string;
  };
};
