import BaseEvent from './BaseEvent';
import { PlayerLogout as PlayerLogoutData } from '../utils/PS2Events';

export default class PlayerLogout extends BaseEvent implements PlayerLogoutData {
    public readonly character_id: string;
    public readonly event_name: 'PlayerLogout';
    public readonly timestamp: string;
    public readonly world_id: string;

    public toHash(): string {
        return '';
    }
}
