import { DeathData } from '../utils/PS2Events';
import { Events } from '../utils/Constants';
import CharacterEvent from './CharacterEvent';

export default class Death extends CharacterEvent implements DeathData {
    public readonly emit = Events.PS2_DEATH;

    public readonly attacker_character_id: string;
    public readonly attacker_fire_mode_id: string;
    public readonly attacker_loadout_id: string;
    public readonly attacker_vehicle_id: string;
    public readonly attacker_weapon_id: string;
    public readonly character_loadout_id: string;
    public readonly event_name: 'Death';
    public readonly is_headshot: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `Death:${this.character_id}:${this.timestamp}`;
    }
}
