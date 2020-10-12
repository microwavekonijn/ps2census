import { requestFactory } from '../utils/requestHelpers';
import { character } from '../formats/character';
import { characterStatHistory } from '../formats/characterStatHistory';
import { characterEventGrouped } from '../formats/characterEventGrouped';

export type charactersEventGroupedFormat = characterEventGrouped & {
    character: character & { // character/character_name
        stats: {
            stat_history: characterStatHistory[], //characters_stat_history
        },
    },
};

export type charactersEventGroupedQuery = {
    character_id: string,
    type?: string,
};

export type charactersEventGroupedResolve =
    'character'
    | 'character_name'
    | 'characters_stat_history';

export const charactersEventGrouped = requestFactory<'characters_event_grouped'>('characters_event_grouped');
