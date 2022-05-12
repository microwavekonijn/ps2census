import { CharacterEvent } from './character.event';

export class PlayerFacilityCapture extends CharacterEvent {
  readonly emit = 'playerFacilityCapture';

  readonly event_name: 'PlayerFacilityCapture';
  readonly facility_id: string;
  readonly outfit_id: string;
  readonly zone_id: string;

  toHash(): string {
    return `PlayerFacilityCapture:${this.character_id}:${this.timestamp}`;
  }
}
