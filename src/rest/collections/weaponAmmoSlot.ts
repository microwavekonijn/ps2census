import { DefaultCollection } from '../types/collection';
import { weaponAmmoSlot } from '../formats/weaponAmmoSlot';

export interface WeaponAmmoSlot extends DefaultCollection {
    collection: 'weapon_ammo_slot';

    format: weaponAmmoSlot;

    conditions: Partial<{
        capacity: string,
        clip_size: string,
        refill_ammo_delay_ms: string,
        refill_ammo_rate: string,
        weapon_id: string,
        weapon_slot_index: string
    }>;
}
