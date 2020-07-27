import { requestFactory } from '../utils/Helpers';
import weaponAmmoSlot from '../types/weaponAmmoSlot';

export type typeData = weaponAmmoSlot;

export type query = Partial<{
    capacity: string,
    clip_size: string,
    refill_ammo_delay_ms: string,
    refill_ammo_rate: string,
    weapon_id: string,
    weapon_slot_index: string
}>;

export default requestFactory<'weapon_ammo_slot'>('weapon_ammo_slot');
