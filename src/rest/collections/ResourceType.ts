export type ResourceType = {
  collection: 'resource_type';
  format: { resource_type_id: string; description: string };
  paths: 'resource_type_id' | 'description';
  partialPaths: 'resource_type_id' | 'description';
  conditions: { description?: string; resource_type_id?: string };
};
