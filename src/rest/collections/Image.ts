export type Image = {
  collection: 'image';
  format: { image_id: string; description: string; path: string };
  paths: 'image_id' | 'description' | 'path';
  partialPaths: 'image_id' | 'description' | 'path';
  conditions: { description?: string; image_id?: string; path?: string };
};
