import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
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

export type query = Partial<{
    character_id: string,
    type: string,
}>;

export type resolve =
    'character'
    | 'character_name'
    | 'characters_stat_history';

export default requestFactory<operations, query, typeData[], commands, resolve>('characters_event_grouped');
