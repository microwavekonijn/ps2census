import BaseEvent from './BaseEvent';
import { Death as DeathData } from '../utils/PS2Events';

export default class Death extends BaseEvent implements DeathData {
    public readonly attacker_character_id: string;
    public readonly attacker_fire_mode_id: string;
    public readonly attacker_loadout_id: string;
    public readonly attacker_vehicle_id: string;
    public readonly attacker_weapon_id: string;
    public readonly character_id: string;
    public readonly character_loadout_id: string;
    public readonly event_name: 'Death';
    public readonly is_headshot: string;
    public readonly timestamp: string;
    public readonly world_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return '';
    }
}
