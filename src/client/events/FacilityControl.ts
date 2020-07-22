import PS2Event from './PS2Event';
import { Events } from '../utils/Constants';

export default class FacilityControl extends PS2Event {
    public readonly emit = Events.PS2_CONTROL;

    public readonly duration_held: string;
    public readonly event_name: 'FacilityControl';
    public readonly facility_id: string;
    public readonly new_faction_id: string;
    public readonly old_faction_id: string;
    public readonly outfit_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `FacilityControl:${this.world_id}:${this.timestamp}:${this.facility_id}`;
    }
}
