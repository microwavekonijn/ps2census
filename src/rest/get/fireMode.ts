import { defineCensusType } from '../get';
import { lang } from '../types/lang';

export type fireModeData = {
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

export type fireModeQuery = Partial<fireModeData>

export default defineCensusType<fireModeQuery, fireModeData[]>('fire_mode');
