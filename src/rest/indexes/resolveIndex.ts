import { singleCharacterByIdResolve } from '../collections/singleCharacterById';
import { characterResolve } from '../collections/character';
import { charactersWeaponStatResolve } from '../collections/charactersWeaponStat';
import { charactersWeaponStatByFactionResolve } from '../collections/charactersWeaponStatByFaction';
import { outfitResolve } from '../collections/outfit';
import { outfitMemberResolve } from '../collections/outfitMember';
import { charactersFriendResolve } from '../collections/charactersFriend';
import { leaderboardResolve } from '../collections/leaderboard';
import { charactersLeaderboardResolve } from '../collections/charactersLeaderboard';
import { charactersEventGroupedResolve } from '../collections/charactersEventGrouped';
import { charactersEventResolve } from '../collections/charactersEvent';
import { eventResolve } from '../collections/event';

export type resolveIndex = {
    single_character_by_id: singleCharacterByIdResolve,
    character: characterResolve,
    characters_weapon_stat: charactersWeaponStatResolve,
    characters_weapon_stat_by_faction: charactersWeaponStatByFactionResolve,
    outfit: outfitResolve,
    outfit_member: outfitMemberResolve,
    characters_friend: charactersFriendResolve,
    leaderboard: leaderboardResolve,
    characters_leaderboard: charactersLeaderboardResolve,
    characters_event_grouped: charactersEventGroupedResolve,
    characters_event: charactersEventResolve,
    event: eventResolve,
};
