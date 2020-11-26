import { Limitable } from '../types/collection';
import { character } from '../formats/character';
import { characterStatHistory } from '../formats/characterStatHistory';
import { event as eventBaseFormat } from '../formats/event';

export interface Event extends Limitable {
    collection: 'event';

    format: eventBaseFormat & {
        character: character & { // character/character_name
            stats: {
                stat_history: characterStatHistory[], // characters_stat_history
            },
        },
    };

    conditions: { type?: string } & ({ after: string, } | { before: string, });

    // TODO: Find associated attacker* formats
    resolve:
        'character' //
        | 'character_name' //
        | 'characters_stat_history' //
        | 'attacker'
        | 'attacker_name'
        | 'attackers_stat_history';
}
