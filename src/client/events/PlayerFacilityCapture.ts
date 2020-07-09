import PS2Event from './PS2Event';
import { PlayerFacilityCapture as PlayerFacilityCaptureData } from '../utils/PS2Events';
import { Events } from '../..';

export default class PlayerFacilityCapture extends PS2Event implements PlayerFacilityCaptureData {
    public readonly emit = Events.PS2_CAPTURE;

    public readonly character_id: string;
    public readonly event_name: 'PlayerFacilityCapture';
    public readonly facility_id: string;
    public readonly outfit_id: string;
    public readonly timestamp: string;
    public readonly world_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `PlayerFacilityCapture:${this.character_id}:${this.timestamp}`;
    }
}
