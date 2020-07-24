import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import outfit from '../types/outfit';
import character from '../types/character';
import characterStatHistory from '../types/characterStatHistory';
import outfitMember from '../types/outfitMember';
import characterOnlineStatus from '../types/characterOnlineStatus';

export type typeData = outfit & {
    leader: character & { // leader/leader_name
        stats: {
            stat_history: characterStatHistory[], // leader_stat_history
        },
    },
    members: character & outfitMember & characterOnlineStatus & { // member_character/member_character_name, member and member_online_status
        character: {
            stats: {
                stat_history: characterStatHistory[], // member_characters_stat_history
            },
        },
    }[],
};

export type query = {
    alias: string,
    alias_lower: string,
    leader_character_id: string,
    member_count: string,
    name: string,
    name_lower: string,
    outfit_id: string,
    time_created: string,
    time_created_date: string
}

export type resolve =
    'leader' //
    | 'leader_name' //
    | 'leaders_stat_history' //
    | 'member' //
    | 'rank' // TODO: What do you resolve?????
    | 'member_character' //
    | 'member_character_name' //
    | 'member_characters_stat_history' //
    | 'member_online_status'; //

export default requestFactory<operations, query, typeData[], commands, resolve>('outfit');
