import { Events } from '../constants/client.constants';
import { CharacterEvent } from './character.event';

export class PlayerLogin extends CharacterEvent {
    public readonly emit = Events.PS2_LOGIN;

    public readonly event_name: 'PlayerLogin';

    public toHash(): string {
        return `PlayerLogin:${this.character_id}:${this.timestamp}`;
    }
}
