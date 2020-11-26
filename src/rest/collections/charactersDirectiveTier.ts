import { DefaultCollection } from '../types/collection';
import { characterDirectiveTier } from '../formats/characterDirectiveTier';

export interface CharactersDirectiveTier extends DefaultCollection {
    collection: 'characters_directive_tier';

    format: characterDirectiveTier;

    conditions: Partial<{
        character_id: string,
        completion_time: string,
        completion_time_date: string,
        directive_tier_id: string,
        directive_tree_id: string
    }>;
}
