import PS2Event from './PS2Event';
import { GainExperienceData } from '../utils/PS2Events';
import { Events } from '../utils/Contants';

export default class GainExperience extends PS2Event implements GainExperienceData {
    public readonly emit = Events.PS2_EXPERIENCE;

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
