import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import character from '../types/character';
import characterStatHistory from '../types/characterStatHistory';
import characterEvent from '../types/characterEvent';

export type typeData = characterEvent & {
    character: character & { // character/character_name
        stats: {
            stat_history: characterStatHistory[], // characters_stat_history
        },
    },
};

export type query = {
    character_id: string,
    after: string,
    before: string,
    id: string,
    type: string,
}

// TODO: Find associated attacker* types
export type resolve =
    'character' //
    | 'character_name' //
    | 'characters_stat_history' //
    | 'attacker'
    | 'attacker_name'
    | 'attackers_stat_history';

export default requestFactory<operations, query, typeData[], commands, resolve>('characters_event');
