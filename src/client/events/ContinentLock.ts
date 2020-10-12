import { PS2Event } from './PS2Event';
import { Events } from '../constants/Client';

export class ContinentLock extends PS2Event {
    public readonly emit = Events.PS2_LOCK;

    public event_name: 'ContinentLock';
    public event_type: string;
    public metagame_event_id: string;
    public nc_population: string;
    public previous_faction: string;
    public tr_population: string;
    public triggering_faction: string;
    public vs_population: string;
    public zone_id: string;

    public toHash(): string {
        return `ContinentLock:${this.world_id}:${this.zone_id}:${this.timestamp}`;
    }
}
