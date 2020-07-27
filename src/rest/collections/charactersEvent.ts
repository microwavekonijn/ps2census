import { requestFactory } from '../utils/Helpers';
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

export type query = { character_id: string } & Partial<{
    after: string,
    before: string,
    id: string,
    type: string,
}>;

// TODO: Find associated attacker* types
export type resolve =
    'character' //
    | 'character_name' //
    | 'characters_stat_history' //
    | 'attacker'
    | 'attacker_name'
    | 'attackers_stat_history';

export default requestFactory<'characters_event'>('characters_event');
