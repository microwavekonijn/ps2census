import { CharacterWorldEvent } from './base/character-world.event';

export class PlayerLogin extends CharacterWorldEvent {
  readonly emit = 'playerLogin';

  readonly event_name: 'PlayerLogin';

  toHash(): string {
    return `PlayerLogin:${this.character_id}:${this.timestamp}`;
  }
}
