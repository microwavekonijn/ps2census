import { DefaultCollection } from '../types/collection';
import { characterDirectiveTree } from '../formats/characterDirectiveTree';

export interface CharactersDirectiveTree extends DefaultCollection {
    collection: 'characters_directive_tree';

    format: characterDirectiveTree;

    conditions: Partial<{
        character_id: string,
        completion_time: string,
        completion_time_date: string,
        current_directive_tier_id: string,
        current_level: string,
        directive_tree_id: string
    }>;
}
