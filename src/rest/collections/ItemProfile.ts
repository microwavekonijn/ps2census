export type ItemProfile = {
  collection: 'item_profile';
  format: { item_id: string; profile_id: string };
  paths: 'item_id' | 'profile_id';
  partialPaths: 'item_id' | 'profile_id';
  conditions: { item_id?: string; profile_id?: string };
};
