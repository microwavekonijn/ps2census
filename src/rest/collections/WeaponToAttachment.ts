export type WeaponToAttachment = {
  collection: 'weapon_to_attachment';
  format: { weapon_group_id: string; attachment_id: string; item_id: string };
  paths: 'weapon_group_id' | 'attachment_id' | 'item_id';
  partialPaths: 'weapon_group_id' | 'attachment_id' | 'item_id';
  conditions: {
    attachment_id?: string;
    item_id?: string;
    weapon_group_id?: string;
  };
};
