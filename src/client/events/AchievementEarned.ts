import BaseEvent from './BaseEvent';
import { AchievementEarned as AchievementEarnedData } from '../utils/PS2Events';

export default class AchievementEarned extends BaseEvent implements AchievementEarnedData {
    public readonly achievement_id: string;
    public readonly character_id: string;
    public readonly event_name: 'AchievementEarned';
    public readonly timestamp: string;
    public readonly world_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `AchievementEarned:${this.character_id}:${this.timestamp}:${this.achievement_id}`;
    }
}
