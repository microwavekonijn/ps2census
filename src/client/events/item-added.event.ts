import { CharacterEvent } from './base/character.event';
import { PS2Events } from '../../stream';

export class ItemAdded extends CharacterEvent<PS2Events.ItemAdded> {
  readonly emit = 'itemAdded';

  readonly context: string;
  readonly event_name: 'ItemAdded';
  readonly item_count: number;
  readonly item_id: string;

  /**
   * Cast item_count to number
   * @param {ItemAdded} data
   * @protected
   */
  protected cast(data: PS2Events.ItemAdded) {
    (this as any).item_count = Number.parseInt(data.item_count, 10);
  }

  toHash(): string {
    return `ItemAdded:${this.character_id}:${this.timestamp}:${this.item_id}`;
  }
}
