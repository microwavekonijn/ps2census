import { Events } from '../constants/client.constants';
import { CharacterEvent } from './character.event';

export class PlayerFacilityCapture extends CharacterEvent {
  readonly emit = Events.PS2_CAPTURE;

  readonly event_name: 'PlayerFacilityCapture';
  readonly facility_id: string;
  readonly outfit_id: string;
  readonly zone_id: string;

  toHash(): string {
    return `PlayerFacilityCapture:${this.character_id}:${this.timestamp}`;
  }
}
