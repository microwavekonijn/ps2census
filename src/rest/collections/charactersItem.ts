import { requestFactory } from '../utils/requestHelpers';
import { characterItem } from '../types/characterItem';

export type typeData = characterItem;

export type query = { character_id: string };

export const charactersItem = requestFactory<'characters_item'>('characters_item');
