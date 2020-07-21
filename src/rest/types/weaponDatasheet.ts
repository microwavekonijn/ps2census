import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

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

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('weaponDatasheet');
