import { requestFactory } from '../utils/requestHelpers';
import { character } from '../formats/character';
import { characterStatHistory } from '../formats/characterStatHistory';
import { event as eventBaseFormat } from '../formats/event';

export type eventFormat = eventBaseFormat & {
    character: character & { // character/character_name
        stats: {
            stat_history: characterStatHistory[], // characters_stat_history
        },
    },
};

export type eventQuery = {
    type?: string
} & ({
    after: string,
} | {
    before: string,
});

// TODO: Find associated attacker* formats
export type eventResolve =
    'character' //
    | 'character_name' //
    | 'characters_stat_history' //
    | 'attacker'
    | 'attacker_name'
    | 'attackers_stat_history';

export const event = requestFactory<'event'>('event');
