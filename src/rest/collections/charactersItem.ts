import { requestFactory } from '../utils/requestHelpers';

export { characterItem as characterItemFormat } from '../formats/characterItem';

export type charactersItemQuery = { character_id: string };

export const charactersItem = requestFactory<'characters_item'>('characters_item');
