import { CharacterEvent } from './base/character.event';
import { PS2Events } from '../../stream';

export class PlayerFacilityCapture extends CharacterEvent<PS2Events.PlayerFacilityCapture> {
  readonly emit = 'playerFacilityCapture';

  readonly event_name: 'PlayerFacilityCapture';
  readonly facility_id: string;
  readonly outfit_id: string;

  toHash(): string {
    return `PlayerFacilityCapture:${this.character_id}:${this.timestamp}`;
  }
}
