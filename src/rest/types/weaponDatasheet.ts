import { lang } from '../utils/Types';

export default weaponDatasheet;

type weaponDatasheet = {
    item_id: string,
    damage: string,
    damage_min: string,
    damage_max: string,
    direct_damage: string,
    indirect_damage: string,
    fire_cone: string,
    fire_cone_min: string,
    fire_cone_max: string,
    fire_rate_ms: string,
    fire_rate_ms_min: string,
    fire_rate_mx_max: string,
    reload_ms: string,
    reload_ms_min: string,
    reload_ms_max: string,
    clip_size: string,
    capacity: string,
    range: lang,
    show_clip_size: string,
    show_fire_modes: string,
    show_range: string,
    [prop: string]: any,
};
