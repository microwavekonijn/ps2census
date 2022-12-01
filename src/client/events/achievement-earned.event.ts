import { CharacterEvent } from './base/character.event';
import { PS2Events } from '../../stream';

export class AchievementEarned extends CharacterEvent<PS2Events.AchievementEarned> {
  readonly emit = 'achievementEarned';

  readonly achievement_id: string;
  readonly event_name: 'AchievementEarned';

  toHash(): string {
    return `AchievementEarned:${this.character_id}:${this.timestamp}:${this.achievement_id}`;
  }
}
