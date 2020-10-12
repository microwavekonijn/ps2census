import { requestFactory } from '../utils/requestHelpers';

export { fireMode as fireModeFormat } from '../formats/fireMode';

export type fireModeQuery = Partial<{
    cof_recoil: string,
    damage: string,
    damage_max: string,
    damage_max_range: string,
    damage_min: string,
    damage_min_range: string,
    damage_radius: string,
    damage_resist_type: string,
    damage_target_type: string,
    damage_type: string,
    default_zoom: string,
    description: string,
    'description.de': string,
    'description.en': string,
    'description.es': string,
    'description.fr': string,
    'description.it': string,
    'description.tr': string,
    fire_mode_id: string,
    indirect_damage_max: string,
    indirect_damage_max_range: string,
    indirect_damage_min: string,
    indirect_damage_min_range: string,
    indirect_damage_resist_type: string,
    indirect_damage_target_type: string,
    item_id: string,
    max_speed: string,
    muzzle_velocity: string,
    pellet_spread: string,
    pellets_per_shot: string,
    player_state_group_id: string,
    projectile_description: string,
    reload_chamber_time_ms: string,
    reload_time_ms: string,
    speed: string,
    type: string
}>;

export const fireMode = requestFactory('fire_mode');
