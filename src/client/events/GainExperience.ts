import { GainExperienceData } from '../utils/PS2Events';
import { Events } from '../utils/Constants';
import CharacterEvent from './CharacterEvent';

export default class GainExperience extends CharacterEvent implements GainExperienceData {
    public readonly emit = Events.PS2_EXPERIENCE;

    public readonly amount: string;
    public readonly event_name: 'GainExperience';
    public readonly experience_id: string;
    public readonly loadout_id: string;
    public readonly other_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `GainExperience:${this.character_id}:${this.timestamp}`;
    }
}
