import { CharacterEvent } from './base/character.event';

export class ItemAdded extends CharacterEvent {
  readonly emit = 'itemAdded';

  readonly context: string;
  readonly event_name: 'ItemAdded';
  readonly item_count: string;
  readonly item_id: string;

  toHash(): string {
    return `ItemAdded:${this.character_id}:${this.timestamp}:${this.item_id}`;
  }
}
