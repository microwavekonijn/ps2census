import { Events } from '../utils/Constants';
import { CharacterEvent } from './CharacterEvent';

export class PlayerFacilityDefend extends CharacterEvent {
    public readonly emit = Events.PS2_DEFEND;

    public readonly event_name: 'PlayerFacilityDefend';
    public readonly facility_id: string;
    public readonly outfit_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `PlayerFacilityDefend:${this.character_id}:${this.timestamp}`;
    }
}
