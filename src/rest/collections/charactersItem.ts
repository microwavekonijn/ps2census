import { requestFactory } from '../utils/requestHelpers';

export { characterItem as charactersItemFormat } from '../formats/characterItem';

export type charactersItemQuery = { character_id: string };

export const charactersItem = requestFactory<'characters_item'>('characters_item');
