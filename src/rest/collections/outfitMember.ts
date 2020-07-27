import { requestFactory } from '../utils/Helpers';
import outfitMember from '../types/outfitMember';
import outfit from '../types/outfit';
import character from '../types/character';
import characterStatHistory from '../types/characterStatHistory';
import characterOnlineStatus from '../types/characterOnlineStatus';

export type typeData =
    outfitMember
    & characterOnlineStatus // online_status
    & {
    character: character & { // character/character_name
        stats: {
            stat_history: characterStatHistory[], // characters_stat_history
        },
    },
    outfit: outfit, // outfit
};

export type query = Partial<{
    character_id: string,
    member_since: string,
    member_since_date: string,
    outfit_id: string,
    rank: string,
    rank_ordinal: string
}>;

export type resolve =
    'character' //
    | 'character_name' //
    | 'characters_stat_history' //
    | 'online_status' //
    | 'outfit'; //

export default requestFactory<'outfit_member'>('outfit_member');
