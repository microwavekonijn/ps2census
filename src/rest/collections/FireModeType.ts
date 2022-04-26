export type FireModeType = {
  collection: 'fire_mode_type';
  format: { fire_mode_type_id: string; description: string };
  paths: 'fire_mode_type_id' | 'description';
  partialPaths: 'fire_mode_type_id' | 'description';
  conditions: { description?: string; fire_mode_type_id?: string };
};
