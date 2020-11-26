import { DefaultCollection } from '../types/collection';
import { characterDirective } from '../formats/characterDirective';

export interface CharactersDirective extends DefaultCollection {
    collection: 'characters_directive';

    format: characterDirective;

    conditions: Partial<{
        character_id: string,
        completion_time: string,
        completion_time_date: string,
        directive_id: string,
        directive_tree_id: string
    }>;
}
