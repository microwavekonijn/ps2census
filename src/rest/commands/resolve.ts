import { baseRequest, Get } from '../utils/Types';
import { setParam } from '../utils/Helpers';

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

export type resolveType<C> = Get<resolveIndex, C> | [Get<resolveIndex, C>, string[]];

export function resolveToString(resolve: (string | [string, string[]])[]): string {
    return resolve.map(r => Array.isArray(r) ? `${r[0]}(${r[1].join(',')})` : r).join(',');
}

export default function <C>(request: baseRequest<C>, resolve: resolveType<C>[]): baseRequest<C> {
    return setParam(request, 'c:resolve', resolveToString(resolve));
}
