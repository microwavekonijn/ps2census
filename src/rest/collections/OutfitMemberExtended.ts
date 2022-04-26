export type OutfitMemberExtended = {
  collection: 'outfit_member_extended';
  format: {
    character_id: string;
    member_since: string;
    member_since_date: string;
    member_rank: string;
    member_rank_ordinal: string;
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
    | 'character_id'
    | 'member_since'
    | 'member_since_date'
    | 'member_rank'
    | 'member_rank_ordinal'
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
    | 'character_id'
    | 'member_since'
    | 'member_since_date'
    | 'member_rank'
    | 'member_rank_ordinal'
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
    character_id?: string;
    leader_character_id?: string;
    member_count?: string;
    member_rank?: string;
    member_rank_ordinal?: string;
    member_since?: string;
    member_since_date?: string;
    name?: string;
    name_lower?: string;
    outfit_id?: string;
    time_created?: string;
    time_created_date?: string;
  };
};
