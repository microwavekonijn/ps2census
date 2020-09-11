import { requestFactory } from '../utils/requestHelpers';
import characterOnlineStatus from '../types/characterOnlineStatus';

export type typeData = characterOnlineStatus;

export type query = { character_id: string };

export default requestFactory<'characters_online_status'>('characters_online_status');
