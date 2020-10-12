import { Events } from '../utils/Constants';
import { CharacterEvent } from './CharacterEvent';

export class SkillAdded extends CharacterEvent {
    public readonly emit = Events.PS2_SKILL;

    public readonly event_name: 'SkillAdded';
    public readonly skill_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `SkillAdded:${this.character_id}:${this.timestamp}`;
    }
}
