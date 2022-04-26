export type WeaponToFireGroup = {
  collection: 'weapon_to_fire_group';
  format: {
    weapon_id: string;
    fire_group_id: string;
    fire_group_index: string;
  };
  paths: 'weapon_id' | 'fire_group_id' | 'fire_group_index';
  partialPaths: 'weapon_id' | 'fire_group_id' | 'fire_group_index';
  conditions: {
    fire_group_id?: string;
    fire_group_index?: string;
    weapon_id?: string;
  };
};
