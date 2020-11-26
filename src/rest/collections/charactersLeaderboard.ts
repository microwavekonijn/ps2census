import { Limitable, Startable } from '../types/collection';
import { character } from '../formats/character';
import { characterStatHistory } from '../formats/characterStatHistory';
import { characterLeaderboard } from '../formats/characterLeaderboard';
import { characterWorld } from '../formats/characterWorld';

export interface CharactersLeaderboard extends Limitable, Startable {
    collection: 'characters_leaderboard';

    format:
        characterLeaderboard
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
        character_id: string
    };

    resolve:
        'character' //
        | 'character_name' //
        | 'characters_stat_history' //
        | 'world'; //
}
