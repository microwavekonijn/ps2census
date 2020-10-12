import { requestFactory } from '../utils/requestHelpers';
import { item } from '../formats/item';
import { characterStat } from '../formats/characterStat';
import { profile } from '../formats/profile';
import { character as characterBaseFormat } from '../formats/character';
import { faction } from '../formats/faction';
import { characterStatByFaction } from '../formats/characterStatByFaction';
import { characterWeaponStat } from '../formats/characterWeaponStat';
import { characterWeaponStatByFaction } from '../formats/characterWeaponStatByFaction';
import { characterStatHistory } from '../formats/characterStatHistory';
import { characterFriends } from '../formats/characterFriends';
import { outfit } from '../formats/outfit';
import { outfitMember } from '../formats/outfitMember';
import { outfitMemberExtended } from '../formats/outfitMemberExtended';
import { characterCurrency } from '../formats/characterCurrency';
import { characterOnlineStatus } from '../formats/characterOnlineStatus';
import { characterWorld } from '../formats/characterWorld';

// TODO: Verify outfit_*
export type characterFormat =
    characterBaseFormat
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

export type characterQuery = Partial<{
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

export type characterResolve =
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

export const character = requestFactory('character');
