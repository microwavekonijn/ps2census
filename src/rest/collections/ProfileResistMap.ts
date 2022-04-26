export type ProfileResistMap = {
  collection: 'profile_resist_map';
  format: { profile_id: string; resist_info_id: string; rank: string };
  paths: 'profile_id' | 'resist_info_id' | 'rank';
  partialPaths: 'profile_id' | 'resist_info_id' | 'rank';
  conditions: { profile_id?: string; rank?: string; resist_info_id?: string };
};
