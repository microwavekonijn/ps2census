import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import characterItem from '../types/characterItem';

export type typeData = characterItem;

export type query = { character_id: string };

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('characters_item');
