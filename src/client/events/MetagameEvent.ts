import { PS2Event } from './PS2Event';
import { Events } from '../utils/Constants';

export class MetagameEvent extends PS2Event {
    public readonly emit = Events.PS2_META_EVENT;

    public readonly event_name: 'MetagameEvent';
    public readonly experience_bonus: string;
    public readonly faction_nc: string;
    public readonly faction_tr: string;
    public readonly faction_vs: string;
    public readonly metagame_event_id: string;
    public readonly metagame_event_state: string;
    public readonly metagame_event_state_name: string;
    public readonly instance_id: string;

    public toHash(): string {
        return `MetagameEvent:${this.world_id}:${this.timestamp}`;
    }
}
