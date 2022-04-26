export type CharactersLeaderboard = {
  collection: 'characters_leaderboard';
  format: { character_id: string; value: string; rank: string };
  paths: 'character_id' | 'value' | 'rank';
  partialPaths: 'character_id' | 'value' | 'rank';
  conditions: {
    name: 'Deaths' | 'Kills' | 'Score' | 'Time';
    period: 'Forever' | 'Monthly' | 'Weekly' | 'Daily' | 'OneLife';
    character_id: string;
  };
  resolve: 'character' | 'character_name' | 'characters_stat_history' | 'world';
};
