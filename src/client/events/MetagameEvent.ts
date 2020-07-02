import BaseEvent from './BaseEvent';
import { MetagameEvent as MetagameEventData } from '../utils/PS2Events';

export default class MetagameEvent extends BaseEvent implements MetagameEventData {
    public readonly event_name: 'MetagameEvent';
    public readonly experience_bonus: string;
    public readonly faction_nc: string;
    public readonly faction_tr: string;
    public readonly faction_vs: string;
    public readonly metagame_event_id: string;
    public readonly metagame_event_state: string;
    public readonly metagame_event_state_name: string;
    public readonly timestamp: string;
    public readonly world_id: string;

    public toHash(): string {
        return `MetagameEvent:${this.world_id}:${this.timestamp}`;
    }
}
