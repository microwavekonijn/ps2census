import { CharacterEvent } from './character.event';

export class PlayerLogin extends CharacterEvent {
  readonly emit = 'playerLogin';

  readonly event_name: 'PlayerLogin';

  toHash(): string {
    return `PlayerLogin:${this.character_id}:${this.timestamp}`;
  }
}
