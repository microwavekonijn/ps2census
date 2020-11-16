import { Events } from '../constants/client.constants';
import { CharacterEvent } from './character.event';

export class GainExperience extends CharacterEvent {
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
