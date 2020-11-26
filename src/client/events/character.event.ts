import { PS2Event } from './ps2.event';
import { characterFormat } from '../../rest/collections/character';

export abstract class CharacterEvent extends PS2Event {
    readonly character_id: string;

    /**
     * Fetch the character data
     *
     * @return {Promise<characterFormat>}
     */
    character(): Promise<characterFormat> {
        return this.client.characterManager.fetch(this.character_id);
    }
}
