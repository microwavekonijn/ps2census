import { DefaultCollection } from '../types/collection';
import { characterDirectiveObjective } from '../formats/characterDirectiveObjective';

export interface CharactersDirectiveObjective extends DefaultCollection {
    collection: 'characters_directive_objective';

    format: characterDirectiveObjective;

    conditions: Partial<{
        character_id: string,
        directive_id: string,
        objective_group_id: string,
        objective_id: string,
        state_data: string,
        status: string
    }>;
}
