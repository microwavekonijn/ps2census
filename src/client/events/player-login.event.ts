import { Events } from '../constants/client.constants';
import { CharacterEvent } from './character.event';

export class PlayerLogin extends CharacterEvent {
    readonly emit = Events.PS2_LOGIN;

    readonly event_name: 'PlayerLogin';

    toHash(): string {
        return `PlayerLogin:${this.character_id}:${this.timestamp}`;
    }
}
