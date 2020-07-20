import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    outfit_id: string,
    character_id: string,
    member_since: string,
    member_since_date: string,
    rank: string,
    rank_ordinal: string,
    character: {
        name: {
            first: string,
            first_lower: string,
            first_merged: string,
            first_lower_merged: string,
        },
        faction_id: string,
        head_id: string,
        title_id: string,
        times: {
            creation: string,
            creation_date: string,
            last_save: string,
            last_save_date: string,
            last_login: string,
            last_login_date: string,
            login_count: string,
            minutes_played: string,
        },
        certs: {
            earned_points: string,
            gifted_points: string,
            spent_points: string,
            available_points: string,
            percent_to_next: string,
        },
        battle_rank: {
            percent_to_next: string,
            value: string,
        },
        profile_id: string,
        daily_ribbon: {
            count: string,
            time: string,
            date: string,
        },
        prestige_level: string,
        stats: {
            stat_history: {
                stat_name: string,
                all_time: string,
                one_life_max: string,
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
            }[],
        },
    },
    outfit: {
        name: string,
        name_lower: string,
        alias: string,
        alias_lower: string,
        time_created: string,
        time_created_date: string,
        leader_character_id: string,
        member_count: string,
    },
    online_status: string,
};

export type query = Partial<typeData>

export type resolve =
    'character'
    | 'character_name'
    | 'characters_stat_history'
    | 'online_status'
    | 'outfit';

export const request = requestFactory<query, typeData[], baseOperations, resolve>('outfitMember');

