export type FireGroupToFireMode = {
  collection: 'fire_group_to_fire_mode';
  format: {
    fire_group_id: string;
    fire_mode_id: string;
    fire_mode_index: string;
  };
  paths: 'fire_group_id' | 'fire_mode_id' | 'fire_mode_index';
  partialPaths: 'fire_group_id' | 'fire_mode_id' | 'fire_mode_index';
  conditions: {
    fire_group_id?: string;
    fire_mode_id?: string;
    fire_mode_index?: string;
  };
};
