import { requestFactory } from '../utils/requestHelpers';
import { character } from '../formats/character';

export type characterNameFormat = Pick<character, 'character_id' | 'name'>;

export type characterNameQuery = Partial<{
    character_id: string,
    name: string,
    'name.first': string,
    'name.first_lower': string
}>;

export const characterName = requestFactory('character_name');
