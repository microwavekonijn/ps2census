import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import characterOnlineStatus from '../types/characterOnlineStatus';

export type typeData = characterOnlineStatus;

export type query = {
    character_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('characters_online_status');
