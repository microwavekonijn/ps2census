export default weapon;

type weapon = {
    weapon_id: string,
    weapon_group_id: string,
    turn_modifier: string,
    move_modifier: string,
    sprint_recovery_ms: string,
    equip_ms: string,
    unequip_ms: string,
    to_iron_sights_ms: string,
    from_iron_sights_ms: string,
    heat_capacity: string,
    heat_bleed_off_rate: string,
    heat_overheat_penalty_ms: string,
    melee_detect_width: string,
    melee_detect_height: string
    [prop: string]: any,
};
