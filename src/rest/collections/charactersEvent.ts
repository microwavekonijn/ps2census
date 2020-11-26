import { Limitable } from '../types/collection';
import { character } from '../formats/character';
import { characterStatHistory } from '../formats/characterStatHistory';
import { characterEvent } from '../formats/characterEvent';

export interface CharactersEvent extends Limitable {
    collection: 'characters_event';

    format: characterEvent & {
        character: character & { // character/character_name
            stats: {
                stat_history: characterStatHistory[], // characters_stat_history
            },
        },
    };

    conditions: { character_id: string } & Partial<{
        after: string,
        before: string,
        id: string,
        type: string,
    }>;

// TODO: Find associated attacker* formats
    resolve:
        'character' //
        | 'character_name' //
        | 'characters_stat_history' //
        | 'attacker'
        | 'attacker_name'
        | 'attackers_stat_history';
}
