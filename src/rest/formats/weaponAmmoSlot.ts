export interface weaponAmmoSlot  {
    weapon_id: string;
    weapon_slot_index: string;
    clip_size: string;
    capacity: string;
    refill_ammo_delay_ms: string;
    refill_ammo_rate: string;
    [prop: string]: unknown;
}
