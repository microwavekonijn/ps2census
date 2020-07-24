import { requestFactory } from '../utils/Helpers';
import { commands as baseCommands } from '../utils/Types';
import characterOnlineStatus from '../types/characterOnlineStatus';

export type typeData = characterOnlineStatus;

export type query = { character_id: string };

export type resolve = never;

export type commands = Extract<baseCommands, 'join' | 'tree'>;

export default requestFactory<'get', query, typeData[], commands, resolve>('characters_online_status');
