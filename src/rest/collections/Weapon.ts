export type Weapon = {
  collection: 'weapon';
  format: {
    weapon_id: string;
    weapon_group_id: string;
    turn_modifier: string;
    move_modifier: string;
    sprint_recovery_ms: string;
    equip_ms: string;
    unequip_ms: string;
    to_iron_sights_ms: string;
    from_iron_sights_ms: string;
    heat_capacity: string;
    heat_bleed_off_rate: string;
    heat_overheat_penalty_ms: string;
    melee_detect_width: string;
    melee_detect_height: string;
  };
  paths:
    | 'weapon_id'
    | 'weapon_group_id'
    | 'turn_modifier'
    | 'move_modifier'
    | 'sprint_recovery_ms'
    | 'equip_ms'
    | 'unequip_ms'
    | 'to_iron_sights_ms'
    | 'from_iron_sights_ms'
    | 'heat_capacity'
    | 'heat_bleed_off_rate'
    | 'heat_overheat_penalty_ms'
    | 'melee_detect_width'
    | 'melee_detect_height';
  partialPaths:
    | 'weapon_id'
    | 'weapon_group_id'
    | 'turn_modifier'
    | 'move_modifier'
    | 'sprint_recovery_ms'
    | 'equip_ms'
    | 'unequip_ms'
    | 'to_iron_sights_ms'
    | 'from_iron_sights_ms'
    | 'heat_capacity'
    | 'heat_bleed_off_rate'
    | 'heat_overheat_penalty_ms'
    | 'melee_detect_width'
    | 'melee_detect_height';
  conditions: {
    equip_ms?: string;
    from_iron_sights_ms?: string;
    heat_bleed_off_rate?: string;
    heat_capacity?: string;
    heat_overheat_penalty_ms?: string;
    melee_detect_height?: string;
    melee_detect_width?: string;
    move_modifier?: string;
    sprint_recovery_ms?: string;
    to_iron_sights_ms?: string;
    turn_modifier?: string;
    unequip_ms?: string;
    weapon_group_id?: string;
    weapon_id?: string;
  };
};
