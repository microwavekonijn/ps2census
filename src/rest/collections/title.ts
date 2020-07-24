import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import title from '../types/title';

export type typeData = title;

export type query = Partial<{
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    title_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('title');
