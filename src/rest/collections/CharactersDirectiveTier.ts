export type CharactersDirectiveTier = {
  collection: 'characters_directive_tier';
  format: {
    character_id: string;
    directive_tree_id: string;
    directive_tier_id: string;
    completion_time: string;
    completion_time_date: string;
  };
  paths:
    | 'character_id'
    | 'directive_tree_id'
    | 'directive_tier_id'
    | 'completion_time'
    | 'completion_time_date';
  partialPaths:
    | 'character_id'
    | 'directive_tree_id'
    | 'directive_tier_id'
    | 'completion_time'
    | 'completion_time_date';
  conditions: {
    character_id?: string;
    completion_time?: string;
    completion_time_date?: string;
    directive_tier_id?: string;
    directive_tree_id?: string;
  };
};
