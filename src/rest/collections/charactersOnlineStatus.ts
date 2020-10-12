import { requestFactory } from '../utils/requestHelpers';

export { characterOnlineStatus as characterOnlineStatusFormat } from '../formats/characterOnlineStatus';

export type charactersOnlineStatusQuery = { character_id: string };

export const charactersOnlineStatus = requestFactory<'characters_online_status'>('characters_online_status');
