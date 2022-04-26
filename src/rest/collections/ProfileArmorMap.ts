export type ProfileArmorMap = {
  collection: 'profile_armor_map';
  format: { profile_id: string; armor_info_id: string; rank: string };
  paths: 'profile_id' | 'armor_info_id' | 'rank';
  partialPaths: 'profile_id' | 'armor_info_id' | 'rank';
  conditions: { armor_info_id?: string; profile_id?: string; rank?: string };
};
