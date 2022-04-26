import { Events } from '../constants/client.constants';
import { CharacterEvent } from './character.event';

export class AchievementEarned extends CharacterEvent {
  readonly emit = Events.PS2_ACHIEVEMENT;

  readonly achievement_id: string;
  readonly event_name: 'AchievementEarned';
  readonly zone_id: string;

  toHash(): string {
    return `AchievementEarned:${this.character_id}:${this.timestamp}:${this.achievement_id}`;
  }
}
