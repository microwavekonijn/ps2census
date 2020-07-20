import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    weapon_id: string,
    turn_modifier: string,
    move_modifier: string,
    sprint_recovery_ms: string,
    equip_ms: string,
    unequip_ms: string,
    to_iron_sights_ms: string,
    from_iron_sights_ms: string,
    melee_detect_width: string,
    melee_detect_height: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('weapon');

