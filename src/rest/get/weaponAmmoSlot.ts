import { defineCensusType } from '../Base';

export type weaponAmmoSlotData = {
    weapon_id: string,
    weapon_slot_index: string,
    clip_size: string,
    capacity: string,
};

export type weaponAmmoSlotQuery = Partial<weaponAmmoSlotData>

export default defineCensusType<weaponAmmoSlotQuery, weaponAmmoSlotData[]>('weapon_ammo_slot');
