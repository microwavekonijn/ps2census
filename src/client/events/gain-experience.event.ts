import { CharacterEvent } from './character.event';

export class GainExperience extends CharacterEvent {
  readonly emit = 'gainExperience';

  readonly amount: string;
  readonly event_name: 'GainExperience';
  readonly experience_id: string;
  readonly loadout_id: string;
  readonly other_id: string;
  readonly zone_id: string;

  toHash(): string {
    return `GainExperience:${this.character_id}:${this.timestamp}`;
  }
}
