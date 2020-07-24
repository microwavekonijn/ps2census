import { requestFactory } from '../utils/Helpers';
import { commands as baseCommands } from '../utils/Types';
import characterItem from '../types/characterItem';

export type typeData = characterItem;

export type query = { character_id: string };

export type resolve = never;

export type commands = Extract<baseCommands, 'join' | 'tree'>;

export default requestFactory<'get', query, typeData[], commands, resolve>('characters_item');
