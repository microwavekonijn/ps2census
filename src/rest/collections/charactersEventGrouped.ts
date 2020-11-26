import { Limitable, Startable } from '../types/collection';
import { character } from '../formats/character';
import { characterStatHistory } from '../formats/characterStatHistory';
import { characterEventGrouped } from '../formats/characterEventGrouped';

export interface CharactersEventGrouped extends Limitable, Startable {
    collection: 'characters_event_grouped';

    format: characterEventGrouped & {
        character: character & { // character/character_name
            stats: {
                stat_history: characterStatHistory[], //characters_stat_history
            },
        },
    };

    conditions: {
        character_id: string,
        type?: string,
    };

    resolve:
        'character'
        | 'character_name'
        | 'characters_stat_history';
}
