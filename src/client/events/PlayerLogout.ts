import { Events } from '../utils/Constants';
import { CharacterEvent } from './CharacterEvent';

export class PlayerLogout extends CharacterEvent {
    public readonly emit = Events.PS2_LOGOUT;

    public readonly event_name: 'PlayerLogout';

    public toHash(): string {
        return `PlayerLogout:${this.character_id}:${this.timestamp}`;
    }
}
