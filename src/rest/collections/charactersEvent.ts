import { requestFactory } from '../utils/Helpers';
import { commands as baseCommands } from '../utils/Types';
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

export type commands = Extract<baseCommands, 'limit' | 'join' | 'tree'>;

export default requestFactory<'get', query, typeData[], commands, resolve>('characters_event');
