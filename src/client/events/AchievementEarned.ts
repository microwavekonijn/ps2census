import PS2Event from './PS2Event';
import { AchievementEarnedData } from '../utils/PS2Events';
import { Events } from '../utils/Contants';

export default class AchievementEarned extends PS2Event implements AchievementEarnedData {
    public readonly emit = Events.PS2_ACHIEVEMENT;

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
