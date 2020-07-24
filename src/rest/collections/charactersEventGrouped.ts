import { requestFactory } from '../utils/Helpers';
import { commands as baseCommands } from '../utils/Types';
import character from '../types/character';
import characterStatHistory from '../types/characterStatHistory';
import characterEventGrouped from '../types/characterEventGrouped';

export type typeData = characterEventGrouped & {
    character: character & { // character/character_name
        stats: {
            stat_history: characterStatHistory[], //characters_stat_history
        },
    },
};

export type query = {
    character_id: string,
    type?: string,
};

export type resolve =
    'character'
    | 'character_name'
    | 'characters_stat_history';

export type commands = Extract<baseCommands, 'limit' | 'join' | 'tree' | 'start'>;

export default requestFactory<'get', query, typeData[], commands, resolve>('characters_event_grouped');
