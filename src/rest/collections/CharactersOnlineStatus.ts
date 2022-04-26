export type CharactersOnlineStatus = {
  collection: 'characters_online_status';
  format: { character_id: string; online_status: string };
  paths: 'character_id' | 'online_status';
  partialPaths: 'character_id' | 'online_status';
  conditions: { character_id: string };
};
