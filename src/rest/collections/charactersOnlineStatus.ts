import { requestFactory } from '../utils/Helpers';
import characterOnlineStatus from '../types/characterOnlineStatus';

export type typeData = characterOnlineStatus;

export type query = { character_id: string };

export type resolve = never;

export default requestFactory<'characters_online_status'>('characters_online_status');
