import { PS2Event } from './PS2Event';
import { characterFormat } from '../../rest/collections/character';

export abstract class CharacterEvent extends PS2Event {
    public readonly character_id: string;

    /**
     * Fetch the character data
     *
     * @return {Promise<characterFormat>}
     */
    public character(): Promise<characterFormat> {
        return this.client.characterManager.fetch(this.character_id);
    }
}
