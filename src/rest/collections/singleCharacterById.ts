import { character } from '../formats/character';
import { characterStatHistory } from '../formats/characterStatHistory';
import { characterStat } from '../formats/characterStat';
import { characterStatByFaction } from '../formats/characterStatByFaction';
import { characterWeaponStat } from '../formats/characterWeaponStat';
import { characterWeaponStatByFaction } from '../formats/characterWeaponStatByFaction';
import { outfitMemberExtended } from '../formats/outfitMemberExtended';
import { item } from '../formats/item';
import { profile } from '../formats/profile';
import { faction } from '../formats/faction';
import { characterOnlineStatus } from '../formats/characterOnlineStatus';
import { characterCurrency } from '../formats/characterCurrency';
import { characterWorld } from '../formats/characterWorld';

export interface SingleCharacterById {
    collection: 'single_character_by_id';

    format:
        character
        & characterOnlineStatus // online_status
        & characterWorld // world
        & {
        currency: characterCurrency,
        stats: {
            stat_history: {
                deaths: Omit<characterStatHistory, 'character_id' | 'stat_name'>,
                kills: Omit<characterStatHistory, 'character_id' | 'stat_name'>,
                score: Omit<characterStatHistory, 'character_id' | 'stat_name'>,
                time: Omit<characterStatHistory, 'character_id' | 'stat_name'>,
                facility_capture: Omit<characterStatHistory, 'character_id' | 'stat_name'>,
                facility_defend: Omit<characterStatHistory, 'character_id' | 'stat_name'>,
                battle_rank: Omit<characterStatHistory, 'character_id' | 'stat_name'>,
                certs: Omit<characterStatHistory, 'character_id' | 'stat_name'>,
                medals: Omit<characterStatHistory, 'character_id' | 'stat_name'>,
                ribbons: Omit<characterStatHistory, 'character_id' | 'stat_name'>,
            },
            stat: characterStat[],
            stat_by_faction: characterStatByFaction[],
            weapon_stat: characterWeaponStat[],
            weapon_stat_by_faction: characterWeaponStatByFaction[],
        },
        friends_list: {}[], // friends
        world_id: string,
        outfit: outfitMemberExtended, // outfit
        items: (item & { // item
            account_level: string,
            stack_count: string,
        })[],
        sub_timing: {},
        profile: profile, // profile
        faction: faction, // faction
    };

    conditions: { character_id: string };

    resolve:
        'online_status' //
        | 'friends' // TODO: Doesn't resolve:???
        | 'world' //
        | 'outfit' //
        | 'item' //
        | 'profile' //
        | 'faction'; //
}
