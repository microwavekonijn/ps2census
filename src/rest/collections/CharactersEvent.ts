export type CharactersEvent = {
  collection: 'characters_event';
  format: {
    character_id: string;
    achievement_id: string;
    timestamp: string;
    zone_id: string;
    world_id: string;
    event_type: string;
    table_type: string;
    item_id: string;
    item_count: string;
    context: string;
  };
  paths:
    | 'character_id'
    | 'achievement_id'
    | 'timestamp'
    | 'zone_id'
    | 'world_id'
    | 'event_type'
    | 'table_type'
    | 'item_id'
    | 'item_count'
    | 'context';
  partialPaths:
    | 'character_id'
    | 'achievement_id'
    | 'timestamp'
    | 'zone_id'
    | 'world_id'
    | 'event_type'
    | 'table_type'
    | 'item_id'
    | 'item_count'
    | 'context';
  conditions: {
    character_id: string;
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
  resolve:
    | 'character'
    | 'character_name'
    | 'characters_stat_history'
    | 'attacker'
    | 'attacker_name'
    | 'attackers_stat_history';
};
