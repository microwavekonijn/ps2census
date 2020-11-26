import { DefaultCollection } from '../types/collection';
import { outfitMember as outfitMemberBaseFormat } from '../formats/outfitMember';
import { outfit } from '../formats/outfit';
import { character } from '../formats/character';
import { characterStatHistory } from '../formats/characterStatHistory';
import { characterOnlineStatus } from '../formats/characterOnlineStatus';

export interface OutfitMember extends DefaultCollection {
    collection: 'outfit_member';

    format:
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

    conditions: Partial<{
        character_id: string,
        member_since: string,
        member_since_date: string,
        outfit_id: string,
        rank: string,
        rank_ordinal: string
    }>;

    resolve:
        'character' //
        | 'character_name' //
        | 'characters_stat_history' //
        | 'online_status' //
        | 'outfit'; //
}
