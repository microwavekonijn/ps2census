import { characterWorld } from '../formats/characterWorld';

export interface CharactersWorld {
    collection: 'characters_world';

    format: characterWorld;

    conditions: Partial<{
        character_id: string,
        world_id: string
    }>;
}
