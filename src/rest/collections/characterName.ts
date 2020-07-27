import { requestFactory } from '../utils/Helpers';
import character from '../types/character';

export type typeData = Pick<character, 'character_id' | 'name'>;

export type query = Partial<{
    character_id: string,
    name: string,
    'name.first': string,
    'name.first_lower': string
}>;

export default requestFactory<'character_name'>('character_name');
