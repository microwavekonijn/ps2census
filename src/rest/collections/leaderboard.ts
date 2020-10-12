import { requestFactory } from '../utils/requestHelpers';
import { leaderboard } from '../formats/leaderboard';
import { character } from '../formats/character';
import { characterStatHistory } from '../formats/characterStatHistory';
import { characterWorld } from '../formats/characterWorld';

export type typeData =
    leaderboard
    & character // character/character_name
    & characterWorld // world
    & {
    stats: {
        stat_history: characterStatHistory[], // characters_stat_history
    },
};

export type query = {
    name: 'Deaths' | 'Kills' | 'Score' | 'Time',
    period: 'Forever' | 'Monthly' | 'Weekly' | 'Daily' | 'OneLife',
    world: string
};

export type resolve =
    'character' //
    | 'world' //
    | 'character_name' //
    | 'characters_stat_history'; //

export const leaderboard = requestFactory<'leaderboard'>('leaderboard');
