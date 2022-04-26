export type ItemType = {
  collection: 'item_type';
  format: { item_type_id: string; name: string; code: string };
  paths: 'item_type_id' | 'name' | 'code';
  partialPaths: 'item_type_id' | 'name' | 'code';
  conditions: { code?: string; item_type_id?: string; name?: string };
};
