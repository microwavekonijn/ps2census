export type PlayerState = {
  collection: 'player_state';
  format: { player_state_id: string; description: string };
  paths: 'player_state_id' | 'description';
  partialPaths: 'player_state_id' | 'description';
  conditions: { description?: string; player_state_id?: string };
};
