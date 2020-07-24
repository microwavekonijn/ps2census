import { requestFactory } from '../utils/Helpers';
import { commands, lang, operations } from '../utils/Types';
import character from '../types/character';
import characterStatHistory from '../types/characterStatHistory';
import characterStat from '../types/characterStat';
import characterStatByFaction from '../types/characterStatByFaction';
import characterWeaponStat from '../types/characterWeaponStat';
import characterWeaponStatByFaction from '../types/characterWeaponStatByFaction';
import outfitMemberExtended from '../types/outfitMemberExtended';
import item from '../types/item';
import profile from '../types/profile';
import faction from '../types/faction';
import characterOnlineStatus from '../types/characterOnlineStatus';
import characterCurrency from '../types/characterCurrency';
import characterWorld from '../types/characterWorld';

export type typeData =
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

export type query = {
    character_id: string
}

export type resolve =
    'online_status' //
    | 'friends' // Doesn't resolve???
    | 'world' //
    | 'outfit' //
    | 'item' //
    | 'profile' //
    | 'faction'; //

export default requestFactory<operations, query, typeData[], commands, resolve>('single_character_by_id');
