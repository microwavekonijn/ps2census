import BaseEvent from './BaseEvent';
import { GainExperience as GainExperienceData } from '../utils/PS2Events';

export default class GainExperience extends BaseEvent implements GainExperienceData {
    public readonly amount: string;
    public readonly character_id: string;
    public readonly event_name: 'GainExperience';
    public readonly experience_id: string;
    public readonly loadout_id: string;
    public readonly other_id: string;
    public readonly timestamp: string;
    public readonly world_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `GainExperience:${this.character_id}:${this.timestamp}`;
    }
}
