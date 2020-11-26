import { Events } from '../constants/client.constants';
import { CharacterEvent } from './character.event';

export class PlayerLogout extends CharacterEvent {
    readonly emit = Events.PS2_LOGOUT;

    readonly event_name: 'PlayerLogout';

    toHash(): string {
        return `PlayerLogout:${this.character_id}:${this.timestamp}`;
    }
}
