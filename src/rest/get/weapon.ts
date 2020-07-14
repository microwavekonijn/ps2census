import { defineCensusType } from '../Base';

export type weaponData = {
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

export type weaponQuery = Partial<weaponData>

export default defineCensusType<weaponQuery, weaponData[]>('weapon');
