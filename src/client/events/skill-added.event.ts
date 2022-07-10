import { CharacterEvent } from './base/character.event';

export class SkillAdded extends CharacterEvent {
  readonly emit = 'skillAdded';

  readonly event_name: 'SkillAdded';
  readonly skill_id: string;

  toHash(): string {
    return `SkillAdded:${this.character_id}:${this.timestamp}`;
  }
}
