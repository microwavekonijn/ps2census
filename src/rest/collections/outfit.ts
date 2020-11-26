import { DefaultCollection } from '../types/collection';
import { outfit as outfitBaseFormat } from '../formats/outfit';
import { character } from '../formats/character';
import { characterStatHistory } from '../formats/characterStatHistory';
import { outfitMember } from '../formats/outfitMember';
import { characterOnlineStatus } from '../formats/characterOnlineStatus';

export interface Outfit extends DefaultCollection {
    collection: 'outfit';

    format: outfitBaseFormat & {
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

    conditions: Partial<{
        alias: string,
        alias_lower: string,
        leader_character_id: string,
        member_count: string,
        name: string,
        name_lower: string,
        outfit_id: string,
        time_created: string,
        time_created_date: string
    }>;

    resolve:
        | 'leader' //
        | 'leader_name' //
        | 'leaders_stat_history' //
        | 'member' //
        | 'rank' // TODO: What does this resolve?????
        | 'member_character' //
        | 'member_character_name' //
        | 'member_characters_stat_history' //
        | 'member_online_status'; //
}
