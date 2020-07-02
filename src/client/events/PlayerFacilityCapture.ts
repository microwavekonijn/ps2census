import BaseEvent from './BaseEvent';
import { PlayerFacilityCapture as PlayerFacilityCaptureData } from '../utils/PS2Events';

export default class PlayerFacilityCapture extends BaseEvent implements PlayerFacilityCaptureData {
    public readonly character_id: string;
    public readonly event_name: 'PlayerFacilityCapture';
    public readonly facility_id: string;
    public readonly outfit_id: string;
    public readonly timestamp: string;
    public readonly world_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return '';
    }
}
