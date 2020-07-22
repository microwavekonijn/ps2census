import { PlayerLogoutData } from '../utils/PS2Events';
import { Events } from '../utils/Constants';
import CharacterEvent from './CharacterEvent';

export default class PlayerLogout extends CharacterEvent implements PlayerLogoutData {
    public readonly emit = Events.PS2_LOGOUT;

    public readonly event_name: 'PlayerLogout';

    public toHash(): string {
        return `PlayerLogout:${this.character_id}:${this.timestamp}`;
    }
}
