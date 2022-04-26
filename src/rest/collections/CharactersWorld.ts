export type CharactersWorld = {
  collection: 'characters_world';
  format: { character_id: string; world_id: string };
  paths: 'character_id' | 'world_id';
  partialPaths: 'character_id' | 'world_id';
  conditions: { character_id?: string; world_id?: string };
};
