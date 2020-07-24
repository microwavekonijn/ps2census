import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import item from '../types/item';
import characterStat from '../types/characterStat';
import profile from '../types/profile';
import character from '../types/character';
import faction from '../types/faction';
import characterStatByFaction from '../types/characterStatByFaction';
import characterWeaponStat from '../types/characterWeaponStat';
import characterWeaponStatByFaction from '../types/characterWeaponStatByFaction';
import characterStatHistory from '../types/characterStatHistory';
import characterFriends from '../types/characterFriends';
import outfit from '../types/outfit';
import outfitMember from '../types/outfitMember';
import outfitMemberExtended from '../types/outfitMemberExtended';
import characterCurrency from '../types/characterCurrency';
import characterOnlineStatus from '../types/characterOnlineStatus';
import characterWorld from '../types/characterWorld';

// TODO: Verify outfit_*
export type typeData =
    character
    & characterFriends // friends
    & characterOnlineStatus // online_status
    & characterWorld // world
    & {
    items: item[], // item/item_full
    stats: {
        stat: characterStat[], // stat
        weapon_stat: characterWeaponStat[], // weapon_stat
        stat_history: characterStatHistory[], // stat_history
        stat_by_faction: characterStatByFaction[], // stat_by_faction
        weapon_stat_by_faction: characterWeaponStatByFaction[], // weapon_stat_by_faction
    },
    profile: profile, // profile
    faction: faction, // faction
    outfit: outfit & { member_since_date: string }, // outfit
    outfit_member: outfitMember & outfitMemberExtended, // outfit_member and outfit_member_extended
    currency: characterCurrency, // currency
};

export type query = Partial<{
    battle_rank: string,
    'battle_rank.percent_to_next': string,
    'battle_rank.value': string,
    certs: string,
    'certs.available_points': string,
    'certs.earned_points': string,
    'certs.gifted_points': string,
    'certs.percent_to_next': string,
    'certs.spent_points': string,
    character_id: string,
    daily_ribbon: string,
    'daily_ribbon.count': string,
    'daily_ribbon.date': string,
    'daily_ribbon.time': string,
    faction_id: string,
    head_id: string,
    name: string,
    'name.first': string,
    'name.first_lower': string,
    prestige_level: string,
    profile_id: string,
    times: string,
    'times.creation': string,
    'times.creation_date': string,
    'times.last_login': string,
    'times.last_login_date': string,
    'times.last_save': string,
    'times.last_save_date': string,
    'times.login_count': string,
    'times.minutes_played': string,
    title_id: string
}>;

export type resolve =
    'item' //
    | 'item_full' //
    | 'profile' //
    | 'faction' //
    | 'stat' //
    | 'stat_by_faction' //
    | 'weapon_stat' //
    | 'weapon_stat_by_faction' //
    | 'stat_history' //
    | 'online_status' //
    | 'friends' //
    | 'world' //
    | 'outfit' //
    | 'outfit_member' //
    | 'outfit_member_extended' //
    | 'currency'; //

export default requestFactory<operations, query, typeData[], commands, resolve>('character');
