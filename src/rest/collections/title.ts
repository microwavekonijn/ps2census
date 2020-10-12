import { requestFactory } from '../utils/requestHelpers';

export { title as titleFormat } from '../formats/title';

export type titleQuery = Partial<{
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
