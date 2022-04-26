export type WorldEvent = {
  collection: 'world_event';
  format: {
    facility_id: string;
    faction_old: string;
    faction_new: string;
    duration_held: string;
    objective_id: string;
    timestamp: string;
    zone_id: string;
    world_id: string;
    event_type: string;
    table_type: string;
    outfit_id: string;
  };
  paths:
    | 'facility_id'
    | 'faction_old'
    | 'faction_new'
    | 'duration_held'
    | 'objective_id'
    | 'timestamp'
    | 'zone_id'
    | 'world_id'
    | 'event_type'
    | 'table_type'
    | 'outfit_id';
  partialPaths:
    | 'facility_id'
    | 'faction_old'
    | 'faction_new'
    | 'duration_held'
    | 'objective_id'
    | 'timestamp'
    | 'zone_id'
    | 'world_id'
    | 'event_type'
    | 'table_type'
    | 'outfit_id';
  conditions: {
    world_id: string;
    after?: string;
    before?: string;
    id?: string;
    type?:
      | 'BATTLE_RANK'
      | 'ITEM'
      | 'ACHIEVEMENT'
      | 'DEATH'
      | 'KILL'
      | 'VEHICLE_DESTROY'
      | 'FACILITY_CHARACTER';
  };
};
