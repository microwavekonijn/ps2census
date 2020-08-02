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

export type resolveIndex = {
    singleCharacterById: singleCharacterById,
    character: character,
    charactersWeaponStat: charactersWeaponStat,
    charactersWeaponStatByFaction: charactersWeaponStatByFaction,
    outfit: outfit,
    outfitMember: outfitMember,
    charactersFriend: charactersFriend,
    leaderboard: leaderboard,
    charactersLeaderboard: charactersLeaderboard,
    charactersEventGrouped: charactersEventGrouped,
    charactersEvent: charactersEvent,
    event: event,
};
