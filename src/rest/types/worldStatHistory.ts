import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


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

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('worldStatHistory');

