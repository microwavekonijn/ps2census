export type OutfitMember = {
  collection: 'outfit_member';
  format: {
    outfit_id: string;
    character_id: string;
    member_since: string;
    member_since_date: string;
    rank: string;
    rank_ordinal: string;
  };
  paths:
    | 'outfit_id'
    | 'character_id'
    | 'member_since'
    | 'member_since_date'
    | 'rank'
    | 'rank_ordinal';
  partialPaths:
    | 'outfit_id'
    | 'character_id'
    | 'member_since'
    | 'member_since_date'
    | 'rank'
    | 'rank_ordinal';
  conditions: {
    character_id?: string;
    member_since?: string;
    member_since_date?: string;
    outfit_id?: string;
    rank?: string;
    rank_ordinal?: string;
  };
  resolve:
    | 'character'
    | 'character_name'
    | 'characters_stat_history'
    | 'online_status'
    | 'outfit';
};
