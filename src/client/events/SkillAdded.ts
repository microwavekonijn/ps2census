import BaseEvent from './BaseEvent';
import { SkillAdded as SkillAddedData } from '../utils/PS2Events';

export default class SkillAdded extends BaseEvent implements SkillAddedData {
    public readonly character_id: string;
    public readonly event_name: 'SkillAdded';
    public readonly skill_id: string;
    public readonly timestamp: string;
    public readonly world_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `SkillAdded:${this.character_id}:${this.timestamp}`;
    }
}
