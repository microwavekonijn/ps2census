import { CharacterEvent } from './base/character.event';
import { PS2Events } from '../../stream';

export class SkillAdded extends CharacterEvent<PS2Events.SkillAdded> {
  readonly emit = 'skillAdded';

  readonly event_name: 'SkillAdded';
  readonly skill_id: string;

  toHash(): string {
    return `SkillAdded:${this.character_id}:${this.timestamp}`;
  }
}
