import { CharacterWorldEvent } from './base/character-world.event';
import { PS2Events } from '../../stream';

export class PlayerLogin extends CharacterWorldEvent<PS2Events.PlayerLogin> {
  readonly emit = 'playerLogin';

  readonly event_name: 'PlayerLogin';

  toHash(): string {
    return `PlayerLogin:${this.character_id}:${this.timestamp}`;
  }
}
