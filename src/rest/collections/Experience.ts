export type Experience = {
  collection: 'experience';
  format: { experience_id: string; description: string; xp: string };
  paths: 'experience_id' | 'description' | 'xp';
  partialPaths: 'experience_id' | 'description' | 'xp';
  conditions: { description?: string; experience_id?: string; xp?: string };
};
