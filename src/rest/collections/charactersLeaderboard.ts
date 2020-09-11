import { requestFactory } from '../utils/requestHelpers';
import character from '../types/character';
import characterStatHistory from '../types/characterStatHistory';
import characterLeaderboard from '../types/characterLeaderboard';
import characterWorld from '../types/characterWorld';

export type typeData =
    characterLeaderboard
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
    character_id: string
};

export type resolve =
    'character' //
    | 'character_name' //
    | 'characters_stat_history' //
    | 'world'; //

export default requestFactory<'characters_leaderboard'>('characters_leaderboard');
