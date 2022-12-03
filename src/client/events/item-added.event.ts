import { CharacterEvent } from './base/character.event';
import { PS2Events } from '../../stream';
import { PS2Event } from './base/ps2.event';

export class ItemAdded extends CharacterEvent<PS2Events.ItemAdded> {
  readonly emit = 'itemAdded';

  readonly context: string;
  readonly event_name: 'ItemAdded';
  readonly item_count: number;
  readonly item_id: string;

  constructor(
    ...params: ConstructorParameters<typeof PS2Event<PS2Events.ItemAdded>>
  ) {
    super(...params);

    this.item_count = Number.parseInt(params[ItemAdded.DATA].item_count, 10);
  }

  toHash(): string {
    return `ItemAdded:${this.character_id}:${this.timestamp}:${this.item_id}`;
  }
}
