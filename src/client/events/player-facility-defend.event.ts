import { CharacterEvent } from './base/character.event';

export class PlayerFacilityDefend extends CharacterEvent {
  readonly emit = 'playerFacilityDefend';

  readonly event_name: 'PlayerFacilityDefend';
  readonly facility_id: string;
  readonly outfit_id: string;

  toHash(): string {
    return `PlayerFacilityDefend:${this.character_id}:${this.timestamp}`;
  }
}
