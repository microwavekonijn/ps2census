import { requestFactory } from '../utils/requestHelpers';
import leaderboard from '../types/leaderboard';
import character from '../types/character';
import characterStatHistory from '../types/characterStatHistory';
import characterWorld from '../types/characterWorld';

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

export default requestFactory<'leaderboard'>('leaderboard');
