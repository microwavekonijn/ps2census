import { requestFactory } from '../utils/Helpers';
import { commands as baseCommands } from '../utils/Types';
import character from '../types/character';
import characterStatHistory from '../types/characterStatHistory';
import characterLeaderboard from '../types/characterLeaderboard';
import characterWorld from '../types/characterWorld';

export type typeData =
    characterLeaderboard
    & character // character/character_name
    & characterWorld // world
    & {
    world_id: string,
    stats: {
        stat_history: characterStatHistory[], // characters_stat_history
    },
};

export type query = {
    name: 'Deaths' | 'Kills' | 'Score' | 'Time',
    period: 'Forever' | 'Monthly' | 'Weekly' | 'Daily' | 'OneLife',
    character_id: string
}

export type resolve =
    'character' //
    | 'character_name' //
    | 'characters_stat_history' //
    | 'world'; //

export type commands = Extract<baseCommands, 'start' | 'limit' | 'join' | 'tree'>;

export default requestFactory<'get', query, typeData[], commands, resolve>('characters_leaderboard');
