import { characterItem } from '../formats/characterItem';
import { Countable } from '../types/collection';

// TODO: InferCollection countable?
export interface CharactersItem extends Countable {
    collection: 'characters_item';

    format: characterItem;

    conditions: { character_id: string };
}
