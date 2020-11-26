import { DefaultCollection } from '../types/collection';
import { character } from '../formats/character';

export interface CharacterName extends DefaultCollection {
    collection: 'character_name';

    format: Pick<character, 'character_id' | 'name'>;

    conditions: Partial<{
        character_id: string,
        name: string,
        'name.first': string,
        'name.first_lower': string
    }>;
}
