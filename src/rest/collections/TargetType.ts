export type TargetType = {
  collection: 'target_type';
  format: { target_type_id: string; description: string };
  paths: 'target_type_id' | 'description';
  partialPaths: 'target_type_id' | 'description';
  conditions: { description?: string; target_type_id?: string };
};
