import { requestFactory } from '../utils/Helpers';
import characterItem from '../types/characterItem';

export type typeData = characterItem;

export type query = { character_id: string };

export default requestFactory<'characters_item'>('characters_item');
