import { AchievementEarnedData } from '../utils/PS2Events';
import { Events } from '../utils/Constants';
import CharacterEvent from './CharacterEvent';

export default class AchievementEarned extends CharacterEvent implements AchievementEarnedData {
    public readonly emit = Events.PS2_ACHIEVEMENT;

    public readonly achievement_id: string;
    public readonly event_name: 'AchievementEarned';
    public readonly zone_id: string;

    public toHash(): string {
        return `AchievementEarned:${this.character_id}:${this.timestamp}:${this.achievement_id}`;
    }
}
