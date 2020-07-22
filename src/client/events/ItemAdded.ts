import { Events } from '../utils/Constants';
import CharacterEvent from './CharacterEvent';

export default class ItemAdded extends CharacterEvent {
    public readonly emit = Events.PS2_ITEM;

    public readonly context: string;
    public readonly event_name: 'ItemAdded';
    public readonly item_count: string;
    public readonly item_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `ItemAdded:${this.character_id}:${this.timestamp}:${this.item_id}`;
    }
}
