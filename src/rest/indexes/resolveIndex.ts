import { resolve as singleCharacterById } from '../collections/singleCharacterById';
import { resolve as character } from '../collections/character';
import { resolve as charactersWeaponStat } from '../collections/charactersWeaponStat';
import { resolve as charactersWeaponStatByFaction } from '../collections/charactersWeaponStatByFaction';
import { resolve as outfit } from '../collections/outfit';
import { resolve as outfitMember } from '../collections/outfitMember';
import { resolve as charactersFriend } from '../collections/charactersFriend';
import { resolve as leaderboard } from '../collections/leaderboard';
import { resolve as charactersLeaderboard } from '../collections/charactersLeaderboard';
import { resolve as charactersEventGrouped } from '../collections/charactersEventGrouped';
import { resolve as charactersEvent } from '../collections/charactersEvent';
import { resolve as event } from '../collections/event';

export default resolveIndex;

type resolveIndex = {
    single_character_by_id: singleCharacterById,
    character: character,
    characters_weapon_stat: charactersWeaponStat,
    characters_weapon_stat_by_faction: charactersWeaponStatByFaction,
    outfit: outfit,
    outfit_member: outfitMember,
    characters_friend: charactersFriend,
    leaderboard: leaderboard,
    characters_leaderboard: charactersLeaderboard,
    characters_event_grouped: charactersEventGrouped,
    characters_event: charactersEvent,
    event: event,
};
