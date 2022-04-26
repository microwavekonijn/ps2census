export type VehicleAttachment = {
  collection: 'vehicle_attachment';
  format: {
    item_id: string;
    vehicle_id: string;
    faction_id: string;
    description: string;
    slot_id: string;
  };
  paths: 'item_id' | 'vehicle_id' | 'faction_id' | 'description' | 'slot_id';
  partialPaths:
    | 'item_id'
    | 'vehicle_id'
    | 'faction_id'
    | 'description'
    | 'slot_id';
  conditions: {
    description?: string;
    faction_id?: string;
    item_id?: string;
    slot_id?: string;
    vehicle_id?: string;
  };
};
