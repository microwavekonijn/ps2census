import { Events } from '../constants/client.constants';
import { CharacterEvent } from './character.event';

export class ItemAdded extends CharacterEvent {
    readonly emit = Events.PS2_ITEM;

    readonly context: string;
    readonly event_name: 'ItemAdded';
    readonly item_count: string;
    readonly item_id: string;
    readonly zone_id: string;

    toHash(): string {
        return `ItemAdded:${this.character_id}:${this.timestamp}:${this.item_id}`;
    }
}
