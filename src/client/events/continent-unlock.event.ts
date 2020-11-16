import { PS2Event } from './ps2.event';
import { Events } from '../constants/client.constants';

export class ContinentUnlock extends PS2Event {
    public readonly emit = Events.PS2_UNLOCK;

    public event_name: 'ContinentUnlock';
    public event_type: string;
    public metagame_event_id: string;
    public nc_population: string;
    public previous_faction: string;
    public tr_population: string;
    public triggering_faction: string;
    public vs_population: string;
    public zone_id: string;

    public toHash(): string {
        return `ContinentUnlock:${this.world_id}:${this.zone_id}:${this.timestamp}`;
    }
}
