import { requestFactory } from '../utils/requestHelpers';
import { leaderboard as leaderboardBaseFormat } from '../formats/leaderboard';
import { character } from '../formats/character';
import { characterStatHistory } from '../formats/characterStatHistory';
import { characterWorld } from '../formats/characterWorld';

export type leaderboardFormat =
    leaderboardBaseFormat
    & character // character/character_name
    & characterWorld // world
    & {
    stats: {
        stat_history: characterStatHistory[], // characters_stat_history
    },
};

export type leaderboardQuery = {
    name: 'Deaths' | 'Kills' | 'Score' | 'Time',
    period: 'Forever' | 'Monthly' | 'Weekly' | 'Daily' | 'OneLife',
    world: string
};

export type leaderboardResolve =
    'character' //
    | 'world' //
    | 'character_name' //
    | 'characters_stat_history'; //

export const leaderboard = requestFactory<'leaderboard'>('leaderboard');
