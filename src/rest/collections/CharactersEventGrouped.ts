export type CharactersEventGrouped = {
  collection: 'characters_event_grouped';
  format: { table_type: string; count: string; character_id: string };
  paths: 'table_type' | 'count' | 'character_id';
  partialPaths: 'table_type' | 'count' | 'character_id';
  conditions: { character_id: string; type?: 'DEATH' | 'KILL' };
  resolve: 'character' | 'character_name' | 'characters_stat_history';
};
