import { Events } from '../constants/client.constants';
import { CharacterEvent } from './character.event';

export class PlayerLogout extends CharacterEvent {
    public readonly emit = Events.PS2_LOGOUT;

    public readonly event_name: 'PlayerLogout';

    public toHash(): string {
        return `PlayerLogout:${this.character_id}:${this.timestamp}`;
    }
}
