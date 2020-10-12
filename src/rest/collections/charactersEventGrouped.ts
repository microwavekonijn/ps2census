import { requestFactory } from '../utils/requestHelpers';
import { character } from '../types/character';
import { characterStatHistory } from '../types/characterStatHistory';
import { characterEventGrouped } from '../types/characterEventGrouped';

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

export const charactersEventGrouped = requestFactory<'characters_event_grouped'>('characters_event_grouped');
