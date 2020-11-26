import { PS2Event } from './ps2.event';
import { Format } from '../../rest/types/collection';
import { Character } from '../../rest/collections/character';

export abstract class CharacterEvent extends PS2Event {
    readonly character_id: string;

    /**
     * Fetch the character data
     *
     * @return {Promise<Format<Character>>}
     */
    character(): Promise<Format<Character>> {
        return this.client.characterManager.fetch(this.character_id);
    }
}
