import { PS2Event } from './PS2Event';
import { typeData as character } from '../../rest/collections/character';

export abstract class CharacterEvent extends PS2Event {
    public readonly character_id: string;

    /**
     * Fetch the character data
     *
     * @return {Promise<typeData>}
     */
    public character(): Promise<character> {
        return this.client.characterManager.fetch(this.character_id);
    }
}
