import PS2Event from './PS2Event';
import { PlayerLogout as PlayerLogoutData } from '../utils/PS2Events';

export default class PlayerLogout extends PS2Event implements PlayerLogoutData {
    public readonly character_id: string;
    public readonly event_name: 'PlayerLogout';
    public readonly timestamp: string;
    public readonly world_id: string;

    public toHash(): string {
        return `PlayerLogout:${this.character_id}:${this.timestamp}`;
    }
}
