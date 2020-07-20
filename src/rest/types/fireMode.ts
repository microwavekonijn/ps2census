import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
    fire_mode_id: string,
    item_id: string,
    type: string,
    description: lang,
    player_state_group_id: string,
    cof_recoil: string,
    reload_time_ms: string,
    pellets_per_shot: string,
    pellet_spread: string,
    default_zoom: string,
    speed: string,
    projectile_description: string,
    damage_type: string,
    damage: string,
    damage_target_type: string,
    damage_resist_type: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('fireMode');

