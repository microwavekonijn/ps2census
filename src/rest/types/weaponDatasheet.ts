import { requestFactory } from '../utils/Helpers';
import { commands, lang, operations } from '../utils/Types';

export type typeData = {
    item_id: string,
    damage: string,
    damage_min: string,
    damage_max: string,
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
};

export type query = {
    capacity: string,
    clip_size: string,
    damage: string,
    damage_max: string,
    damage_min: string,
    direct_damage: string,
    fire_cone: string,
    fire_cone_max: string,
    fire_cone_min: string,
    fire_rate_ms: string,
    fire_rate_ms_min: string,
    fire_rate_mx_max: string,
    indirect_damage: string,
    item_id: string,
    range: string,
    'range.de': string,
    'range.en': string,
    'range.es': string,
    'range.fr': string,
    'range.it': string,
    'range.tr': string,
    reload_ms: string,
    reload_ms_max: string,
    reload_ms_min: string,
    show_clip_size: string,
    show_fire_modes: string,
    show_range: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('weaponDatasheet');
