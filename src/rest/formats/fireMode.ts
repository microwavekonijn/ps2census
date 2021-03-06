import { Lang } from '../types/response';

export interface fireMode {
    fire_mode_id: string;
    item_id: string;
    type: string;
    description: Lang;
    player_state_group_id: string;
    cof_recoil: string;
    reload_time_ms: string;
    reload_chamber_time_ms: string;
    pellets_per_shot: string;
    pellet_spread: string;
    default_zoom: string;
    muzzle_velocity: string;
    speed: string;
    max_speed: string;
    damage_radius: string;
    projectile_description: string;
    damage_type: string;
    damage: string;
    damage_min: string;
    damage_max: string;
    damage_min_range: string;
    damage_max_range: string;
    damage_target_type: string;
    damage_resist_type: string;
    indirect_damage_max: string;
    indirect_damage_max_range: string;
    indirect_damage_min: string;
    indirect_damage_min_range: string;
    indirect_damage_target_type: string;
    indirect_damage_resist_type: string
}
