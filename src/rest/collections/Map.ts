export type Map = {
  collection: 'map';
  format: {
    ZoneId: string;
    Regions: {
      IsList: string;
      Row: { RowData: { RegionId: string; FactionId: string } }[];
    };
  };
  paths:
    | 'ZoneId'
    | 'Regions.IsList'
    | 'Regions.Row.RowData.RegionId'
    | 'Regions.Row.RowData.FactionId';
  partialPaths:
    | 'ZoneId'
    | 'Regions'
    | 'Regions.IsList'
    | 'Regions.Row'
    | 'Regions.Row.RowData'
    | 'Regions.Row.RowData.RegionId'
    | 'Regions.Row.RowData.FactionId';
  conditions: { world_id: string; zone_ids: string };
};
