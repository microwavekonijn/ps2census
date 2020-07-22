import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    weapon_id: string,
    weapon_slot_index: string,
    clip_size: string,
    capacity: string,
};

export type query = {
    capacity: string,
    clip_size: string,
    refill_ammo_delay_ms: string,
    refill_ammo_rate: string,
    weapon_id: string,
    weapon_slot_index: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('weaponAmmoSlot');
