export type VehicleFaction = {
  collection: 'vehicle_faction';
  format: { vehicle_id: string; faction_id: string };
  paths: 'vehicle_id' | 'faction_id';
  partialPaths: 'vehicle_id' | 'faction_id';
  conditions: { faction_id?: string; vehicle_id?: string };
};
