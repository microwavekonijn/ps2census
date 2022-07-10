import { CharacterEvent } from './base/character.event';

export class PlayerFacilityCapture extends CharacterEvent {
  readonly emit = 'playerFacilityCapture';

  readonly event_name: 'PlayerFacilityCapture';
  readonly facility_id: string;
  readonly outfit_id: string;

  toHash(): string {
    return `PlayerFacilityCapture:${this.character_id}:${this.timestamp}`;
  }
}
