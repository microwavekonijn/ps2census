import { requestFactory } from '../utils/requestHelpers';
import { title } from '../types/title';

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

export const title = requestFactory<'title'>('title');
