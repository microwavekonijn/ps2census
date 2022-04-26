export type Event = {
  collection: 'event';
  format: {
    character_id: string;
    achievement_id: string;
    timestamp: string;
    zone_id: string;
    world_id: string;
    event_type: string;
    table_type: string;
  };
  paths:
    | 'character_id'
    | 'achievement_id'
    | 'timestamp'
    | 'zone_id'
    | 'world_id'
    | 'event_type'
    | 'table_type';
  partialPaths:
    | 'character_id'
    | 'achievement_id'
    | 'timestamp'
    | 'zone_id'
    | 'world_id'
    | 'event_type'
    | 'table_type';
  conditions: {
    type?:
      | 'BATTLE_RANK'
      | 'ITEM'
      | 'ACHIEVEMENT'
      | 'DEATH'
      | 'KILL'
      | 'VEHICLE_DESTROY'
      | 'FACILITY_CHARACTER';
    after?: string;
    before?: string;
  };
  resolve:
    | 'character'
    | 'character_name'
    | 'characters_stat_history'
    | 'attacker'
    | 'attacker_name'
    | 'attackers_stat_history';
};
