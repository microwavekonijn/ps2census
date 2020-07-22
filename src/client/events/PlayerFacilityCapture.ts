import { Events } from '../utils/Constants';
import CharacterEvent from './CharacterEvent';

export default class PlayerFacilityCapture extends CharacterEvent {
    public readonly emit = Events.PS2_CAPTURE;

    public readonly event_name: 'PlayerFacilityCapture';
    public readonly facility_id: string;
    public readonly outfit_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `PlayerFacilityCapture:${this.character_id}:${this.timestamp}`;
    }
}
