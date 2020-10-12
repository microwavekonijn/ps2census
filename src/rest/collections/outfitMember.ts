import { requestFactory } from '../utils/requestHelpers';
import { outfitMember as outfitMemberBaseFormat } from '../formats/outfitMember';
import { outfit } from '../formats/outfit';
import { character } from '../formats/character';
import { characterStatHistory } from '../formats/characterStatHistory';
import { characterOnlineStatus } from '../formats/characterOnlineStatus';

export type outfitMemberFormat =
    outfitMemberBaseFormat
    & characterOnlineStatus // online_status
    & {
    character: character & { // character/character_name
        stats: {
            stat_history: characterStatHistory[], // characters_stat_history
        },
    },
    outfit: outfit, // outfit
};

export type outfitMemberQuery = Partial<{
    character_id: string,
    member_since: string,
    member_since_date: string,
    outfit_id: string,
    rank: string,
    rank_ordinal: string
}>;

export type outfitMemberResolve =
    'character' //
    | 'character_name' //
    | 'characters_stat_history' //
    | 'online_status' //
    | 'outfit'; //

export const outfitMember = requestFactory('outfit_member');
