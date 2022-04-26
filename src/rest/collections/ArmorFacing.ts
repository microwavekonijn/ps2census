export type ArmorFacing = {
  collection: 'armor_facing';
  format: { armor_facing_id: string; description: string };
  paths: 'armor_facing_id' | 'description';
  partialPaths: 'armor_facing_id' | 'description';
  conditions: { armor_facing_id?: string; description?: string };
};
