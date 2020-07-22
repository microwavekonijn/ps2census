import { SkillAddedData } from '../utils/PS2Events';
import { Events } from '../utils/Constants';
import CharacterEvent from './CharacterEvent';

export default class SkillAdded extends CharacterEvent implements SkillAddedData {
    public readonly emit = Events.PS2_SKILL;

    public readonly event_name: 'SkillAdded';
    public readonly skill_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `SkillAdded:${this.character_id}:${this.timestamp}`;
    }
}
