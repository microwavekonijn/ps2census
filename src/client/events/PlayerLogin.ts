import BaseEvent from './BaseEvent';
import { PlayerLogin as PlayerLoginData } from '../utils/PS2Events';

export default class PlayerLogin extends BaseEvent implements PlayerLoginData {
    public readonly character_id: string;
    public readonly event_name: 'PlayerLogin';
    public readonly timestamp: string;
    public readonly world_id: string;

    public toHash(): string {
        return '';
    }
}
