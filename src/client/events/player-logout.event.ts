import { CharacterWorldEvent } from './base/character-world.event';

export class PlayerLogout extends CharacterWorldEvent {
  readonly emit = 'playerLogout';

  readonly event_name: 'PlayerLogout';

  toHash(): string {
    return `PlayerLogout:${this.character_id}:${this.timestamp}`;
  }
}
