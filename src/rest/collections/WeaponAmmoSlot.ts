export type WeaponAmmoSlot = {
  collection: 'weapon_ammo_slot';
  format: {
    weapon_id: string;
    weapon_slot_index: string;
    clip_size: string;
    capacity: string;
    refill_ammo_delay_ms: string;
    refill_ammo_rate: string;
  };
  paths:
    | 'weapon_id'
    | 'weapon_slot_index'
    | 'clip_size'
    | 'capacity'
    | 'refill_ammo_delay_ms'
    | 'refill_ammo_rate';
  partialPaths:
    | 'weapon_id'
    | 'weapon_slot_index'
    | 'clip_size'
    | 'capacity'
    | 'refill_ammo_delay_ms'
    | 'refill_ammo_rate';
  conditions: {
    capacity?: string;
    clip_size?: string;
    refill_ammo_delay_ms?: string;
    refill_ammo_rate?: string;
    weapon_id?: string;
    weapon_slot_index?: string;
  };
};
