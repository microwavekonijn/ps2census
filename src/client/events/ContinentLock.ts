import BaseEvent from './BaseEvent';
import { ContinentLock as ContinentLockData } from '../utils/PS2Events';

export default class ContinentLock extends BaseEvent implements ContinentLockData {
    public event_name: 'ContinentLock';
    public event_type: string;
    public metagame_event_id: string;
    public nc_population: string;
    public previous_faction: string;
    public timestamp: string;
    public tr_population: string;
    public triggering_faction: string;
    public vs_population: string;
    public world_id: string;
    public zone_id: string;

    public toHash(): string {
        return `ContinentLock:${this.world_id}:${this.zone_id}:${this.timestamp}`;
    }
}
