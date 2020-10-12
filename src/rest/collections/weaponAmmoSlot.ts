import { requestFactory } from '../utils/requestHelpers';

export { weaponAmmoSlot as weaponAmmoSlotFormat } from '../formats/weaponAmmoSlot';

export type weaponAmmoSlotQuery = Partial<{
    capacity: string,
    clip_size: string,
    refill_ammo_delay_ms: string,
    refill_ammo_rate: string,
    weapon_id: string,
    weapon_slot_index: string
}>;

export const weaponAmmoSlot = requestFactory('weapon_ammo_slot');
