import { requestFactory } from '../utils/requestHelpers';
import { character } from '../formats/character';
import { characterStatHistory } from '../formats/characterStatHistory';
import { characterLeaderboard } from '../formats/characterLeaderboard';
import { characterWorld } from '../formats/characterWorld';

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

export const charactersLeaderboard = requestFactory<'characters_leaderboard'>('characters_leaderboard');
