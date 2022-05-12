import { CharacterEvent } from './character.event';

export class PlayerLogout extends CharacterEvent {
  readonly emit = 'playerLogout';

  readonly event_name: 'PlayerLogout';

  toHash(): string {
    return `PlayerLogout:${this.character_id}:${this.timestamp}`;
  }
}
