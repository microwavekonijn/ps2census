import PS2Event from './PS2Event';
import { PlayerLogoutData } from '../utils/PS2Events';
import { Events } from '../utils/Constants';

export default class PlayerLogout extends PS2Event implements PlayerLogoutData {
    public readonly emit = Events.PS2_LOGOUT;

    public readonly character_id: string;
    public readonly event_name: 'PlayerLogout';
    public readonly timestamp: string;

    public toHash(): string {
        return `PlayerLogout:${this.character_id}:${this.timestamp}`;
    }
}
