import PS2Event from './PS2Event';
import { VehicleDestroy as VehicleDestroyData } from '../utils/PS2Events';

export default class VehicleDestroy extends PS2Event implements VehicleDestroyData {
    public readonly attacker_character_id: string;
    public readonly attacker_loadout_id: string;
    public readonly attacker_vehicle_id: string;
    public readonly attacker_weapon_id: string;
    public readonly character_id: string;
    public readonly event_name: 'VehicleDestroy';
    public readonly facility_id: string;
    public readonly faction_id: string;
    public readonly timestamp: string;
    public readonly vehicle_id: string;
    public readonly world_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `VehicleDestroy:${this.character_id}:${this.timestamp}:${this.attacker_character_id}`;
    }
}
