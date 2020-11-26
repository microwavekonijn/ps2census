import { characterOnlineStatus } from '../formats/characterOnlineStatus';

export interface CharactersOnlineStatus {
    collection: 'characters_online_status';

    format: characterOnlineStatus;
    conditions: { character_id: string };
}
