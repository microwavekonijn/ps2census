export type CharactersDirectiveTree = {
  collection: 'characters_directive_tree';
  format: {
    character_id: string;
    directive_tree_id: string;
    current_directive_tier_id: string;
    current_level: string;
    completion_time: string;
    completion_time_date: string;
  };
  paths:
    | 'character_id'
    | 'directive_tree_id'
    | 'current_directive_tier_id'
    | 'current_level'
    | 'completion_time'
    | 'completion_time_date';
  partialPaths:
    | 'character_id'
    | 'directive_tree_id'
    | 'current_directive_tier_id'
    | 'current_level'
    | 'completion_time'
    | 'completion_time_date';
  conditions: {
    character_id?: string;
    completion_time?: string;
    completion_time_date?: string;
    current_directive_tier_id?: string;
    current_level?: string;
    directive_tree_id?: string;
  };
};
