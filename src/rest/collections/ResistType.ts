export type ResistType = {
  collection: 'resist_type';
  format: { resist_type_id: string; description: string };
  paths: 'resist_type_id' | 'description';
  partialPaths: 'resist_type_id' | 'description';
  conditions: { description?: string; resist_type_id?: string };
};
