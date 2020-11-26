import { Events } from '../constants/client.constants';
import { CharacterEvent } from './character.event';

export class PlayerFacilityDefend extends CharacterEvent {
    readonly emit = Events.PS2_DEFEND;

    readonly event_name: 'PlayerFacilityDefend';
    readonly facility_id: string;
    readonly outfit_id: string;
    readonly zone_id: string;

    toHash(): string {
        return `PlayerFacilityDefend:${this.character_id}:${this.timestamp}`;
    }
}
