export type ItemToWeapon = {
  collection: 'item_to_weapon';
  format: { item_id: string; weapon_id: string };
  paths: 'item_id' | 'weapon_id';
  partialPaths: 'item_id' | 'weapon_id';
  conditions: { item_id?: string; weapon_id?: string };
};
