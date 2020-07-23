import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    character_id: string,
    name: string,
    friend_list: {
        character_id: string,
        last_login_time: string,
        online: string,
        character_id_merged: string,
        name: {
            first: string,
            first_lower: string,
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
        world_id: string,
    }[],
};

export type query = {
    character_id: string
}

export type resolve =
    'character'
    | 'character_name'
    | 'world';

export default requestFactory<operations, query, typeData[], commands, resolve>('characters_friend');
