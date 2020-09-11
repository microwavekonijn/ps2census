import { requestFactory } from '../utils/requestHelpers';
import faction from '../types/faction';

export type typeData = faction;

export type query = Partial<{
    code_tag: string,
    faction_id: string,
    image_id: string,
    image_path: string,
    image_set_id: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    user_selectable: string
}>;

export default requestFactory<'faction'>('faction');
