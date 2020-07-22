import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

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

export type query = {
    equip_ms: string,
    from_iron_sights_ms: string,
    heat_bleed_off_rate: string,
    heat_capacity: string,
    heat_overheat_penalty_ms: string,
    melee_detect_height: string,
    melee_detect_width: string,
    move_modifier: string,
    sprint_recovery_ms: string,
    to_iron_sights_ms: string,
    turn_modifier: string,
    unequip_ms: string,
    weapon_group_id: string,
    weapon_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('weapon');
