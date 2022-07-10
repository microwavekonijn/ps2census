import { CharacterEvent } from './base/character.event';

export class AchievementEarned extends CharacterEvent {
  readonly emit = 'achievementEarned';

  readonly achievement_id: string;
  readonly event_name: 'AchievementEarned';

  toHash(): string {
    return `AchievementEarned:${this.character_id}:${this.timestamp}:${this.achievement_id}`;
  }
}
