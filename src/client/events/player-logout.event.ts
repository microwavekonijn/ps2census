import { CharacterWorldEvent } from './base/character-world.event';
import { PS2Events } from '../../stream';

export class PlayerLogout extends CharacterWorldEvent<PS2Events.PlayerLogout> {
  readonly emit = 'playerLogout';

  readonly event_name: 'PlayerLogout';

  toHash(): string {
    return `PlayerLogout:${this.character_id}:${this.timestamp}`;
  }
}
