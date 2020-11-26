import { Limitable, Startable } from '../types/collection';
import { leaderboard as leaderboardBaseFormat } from '../formats/leaderboard';
import { character } from '../formats/character';
import { characterStatHistory } from '../formats/characterStatHistory';
import { characterWorld } from '../formats/characterWorld';

export interface Leaderboard extends Limitable, Startable {
    collection: 'leaderboard';

    format:
        leaderboardBaseFormat
        & character // character/character_name
        & characterWorld // world
        & {
        stats: {
            stat_history: characterStatHistory[], // characters_stat_history
        },
    };

    conditions: {
        name: 'Deaths' | 'Kills' | 'Score' | 'Time',
        period: 'Forever' | 'Monthly' | 'Weekly' | 'Daily' | 'OneLife',
        world: string
    };

    resolve:
        'character' //
        | 'world' //
        | 'character_name' //
        | 'characters_stat_history'; //
}
