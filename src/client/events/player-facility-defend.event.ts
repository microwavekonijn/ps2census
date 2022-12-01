import { CharacterEvent } from './base/character.event';
import { PS2Events } from '../../stream';

export class PlayerFacilityDefend extends CharacterEvent<PS2Events.PlayerFacilityDefend> {
  readonly emit = 'playerFacilityDefend';

  readonly event_name: 'PlayerFacilityDefend';
  readonly facility_id: string;
  readonly outfit_id: string;

  toHash(): string {
    return `PlayerFacilityDefend:${this.character_id}:${this.timestamp}`;
  }
}
