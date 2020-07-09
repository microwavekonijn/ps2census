import PS2Event from './PS2Event';
import { ItemAdded as ItemAddedData } from '../utils/PS2Events';
import { Events } from '../utils/Contants';

export default class ItemAdded extends PS2Event implements ItemAddedData {
    public readonly emit = Events.PS2_ITEM;

    public readonly character_id: string;
    public readonly context: string;
    public readonly event_name: 'ItemAdded';
    public readonly item_count: string;
    public readonly item_id: string;
    public readonly timestamp: string;
    public readonly world_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `ItemAdded:${this.character_id}:${this.timestamp}:${this.item_id}`;
    }
}
