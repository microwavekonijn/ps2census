export type PlayerStateGroup = {
  collection: 'player_state_group';
  format: {
    player_state_group_id: string;
    player_state: string;
    min_cone_of_fire: string;
  };
  paths: 'player_state_group_id' | 'player_state' | 'min_cone_of_fire';
  partialPaths: 'player_state_group_id' | 'player_state' | 'min_cone_of_fire';
  conditions: {
    min_cone_of_fire?: string;
    player_state?: string;
    player_state_group_id?: string;
  };
};
