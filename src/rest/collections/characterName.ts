import { requestFactory } from '../utils/requestHelpers';
import { character } from '../types/character';

export type typeData = Pick<character, 'character_id' | 'name'>;

export type query = Partial<{
    character_id: string,
    name: string,
    'name.first': string,
    'name.first_lower': string
}>;

export const characterName = requestFactory<'character_name'>('character_name');
