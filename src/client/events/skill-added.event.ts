import { CharacterEvent } from './character.event';

export class SkillAdded extends CharacterEvent {
  readonly emit = 'skillAdded';

  readonly event_name: 'SkillAdded';
  readonly skill_id: string;
  readonly zone_id: string;

  toHash(): string {
    return `SkillAdded:${this.character_id}:${this.timestamp}`;
  }
}
