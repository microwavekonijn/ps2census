import { requestFactory } from '../utils/Helpers';
import { commands as baseCommands } from '../utils/Types';
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

export type commands = Extract<baseCommands, 'start' | 'limit' | 'join' | 'tree'>;

export default requestFactory<'get', query, typeData[], commands, resolve>('leaderboard');
