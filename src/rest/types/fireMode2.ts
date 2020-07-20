import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
    fire_mode_id: string,
    fire_mode_type_id: string,
    automatic: string,
    grief_immune: string,
    move_modifier: string,
    sprint_fire: string,
    turn_modifier: string,
    use_in_water: string,
    zoom_default: string,
    cof_pellet_spread: string,
    cof_range: string,
    cof_recoil: string,
    cof_scalar: string,
    cof_scalar_moving: string,
    player_state_group_id: string,
    damage_direct_effect_id: string,
    damage_head_multiplier: string,
    fire_ammo_per_shot: string,
    fire_auto_fire_ms: string,
    fire_burst_count: string,
    fire_charge_up_ms: string,
    fire_delay_ms: string,
    fire_detect_range: string,
    fire_duration_ms: string,
    fire_refire_ms: string,
    fire_pellets_per_shot: string,
    recoil_first_shot_modifier: string,
    reload_time_ms: string,
    armor_penetration: string,
    max_damage: string,
    min_damage_range: string,
    shield_bypass_pct: string,
    description: lang,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('fireMode2');

