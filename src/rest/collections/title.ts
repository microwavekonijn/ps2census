import { DefaultCollection } from '../types/collection';
import { title } from '../formats/title';

export interface Title extends DefaultCollection {
    collection: 'title';

    format: title;

    conditions: Partial<{
        name: string,
        'name.de': string,
        'name.en': string,
        'name.es': string,
        'name.fr': string,
        'name.it': string,
        'name.tr': string,
        title_id: string
    }>;
}
