import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    world_id: string,
    stat_name: string,
    type: string,
    tracker_name: string,
    faction: string,
    all_time: string,
    day: {
        d01: string,
        d02: string,
        d03: string,
        d04: string,
        d05: string,
        d06: string,
        d07: string,
        d08: string,
        d09: string,
        d10: string,
        d11: string,
        d12: string,
        d13: string,
        d14: string,
        d15: string,
        d16: string,
        d17: string,
        d18: string,
        d19: string,
        d20: string,
        d21: string,
        d22: string,
        d23: string,
        d24: string,
        d25: string,
        d26: string,
        d27: string,
        d28: string,
        d29: string,
        d30: string,
        d31: string,
    },
    month: {
        m01: string,
        m02: string,
        m03: string,
        m04: string,
        m05: string,
        m06: string,
        m07: string,
        m08: string,
        m09: string,
        m10: string,
        m11: string,
        m12: string,
    },
    week: {
        w01: string,
        w02: string,
        w03: string,
        w04: string,
        w05: string,
        w06: string,
        w07: string,
        w08: string,
        w09: string,
        w10: string,
        w11: string,
        w12: string,
        w13: string,
    },
    last_save: string,
    last_save_date: string,
};

export type query = {
    all_time: string,
    day: string,
    'day.d01': string,
    'day.d02': string,
    'day.d03': string,
    'day.d04': string,
    'day.d05': string,
    'day.d06': string,
    'day.d07': string,
    'day.d08': string,
    'day.d09': string,
    'day.d10': string,
    'day.d11': string,
    'day.d12': string,
    'day.d13': string,
    'day.d14': string,
    'day.d15': string,
    'day.d16': string,
    'day.d17': string,
    'day.d18': string,
    'day.d19': string,
    'day.d20': string,
    'day.d21': string,
    'day.d22': string,
    'day.d23': string,
    'day.d24': string,
    'day.d25': string,
    'day.d26': string,
    'day.d27': string,
    'day.d28': string,
    'day.d29': string,
    'day.d30': string,
    'day.d31': string,
    faction: string,
    last_save: string,
    last_save_date: string,
    month: string,
    'month.m01': string,
    'month.m02': string,
    'month.m03': string,
    'month.m04': string,
    'month.m05': string,
    'month.m06': string,
    'month.m07': string,
    'month.m08': string,
    'month.m09': string,
    'month.m10': string,
    'month.m11': string,
    'month.m12': string,
    stat_name: string,
    tracker_name: string,
    type: string,
    week: string,
    'week.w01': string,
    'week.w02': string,
    'week.w03': string,
    'week.w04': string,
    'week.w05': string,
    'week.w06': string,
    'week.w07': string,
    'week.w08': string,
    'week.w09': string,
    'week.w10': string,
    'week.w11': string,
    'week.w12': string,
    'week.w13': string,
    world_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('world_stat_history');
