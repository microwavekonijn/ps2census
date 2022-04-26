export type Profile2 = {
  collection: 'profile_2';
  format: { profile_id: string; description: string };
  paths: 'profile_id' | 'description';
  partialPaths: 'profile_id' | 'description';
  conditions: { description?: string; profile_id?: string };
};
