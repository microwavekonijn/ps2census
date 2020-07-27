import { requestFactory } from '../utils/Helpers';
import weapon from '../types/weapon';

export type typeData = weapon;

export type query = Partial<{
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
}>;

export default requestFactory<'weapon'>('weapon');
