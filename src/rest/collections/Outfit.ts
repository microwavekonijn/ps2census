export type Outfit = {
  collection: 'outfit';
  format: {
    outfit_id: string;
    name: string;
    name_lower: string;
    alias: string;
    alias_lower: string;
    time_created: string;
    time_created_date: string;
    leader_character_id: string;
    member_count: string;
  };
  paths:
    | 'outfit_id'
    | 'name'
    | 'name_lower'
    | 'alias'
    | 'alias_lower'
    | 'time_created'
    | 'time_created_date'
    | 'leader_character_id'
    | 'member_count';
  partialPaths:
    | 'outfit_id'
    | 'name'
    | 'name_lower'
    | 'alias'
    | 'alias_lower'
    | 'time_created'
    | 'time_created_date'
    | 'leader_character_id'
    | 'member_count';
  conditions: {
    alias?: string;
    alias_lower?: string;
    leader_character_id?: string;
    member_count?: string;
    name?: string;
    name_lower?: string;
    outfit_id?: string;
    time_created?: string;
    time_created_date?: string;
  };
  resolve:
    | 'leader'
    | 'leader_name'
    | 'leaders_stat_history'
    | 'member'
    | 'rank'
    | 'member_character'
    | 'member_character_name'
    | 'member_characters_stat_history'
    | 'member_online_status';
};
