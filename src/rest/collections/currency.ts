import { DefaultCollection } from '../types/collection';
import { currency } from '../formats/currency';

export interface Currency extends DefaultCollection {
    collection: 'currency';

    format: currency;

    conditions: Partial<{
        currency_id: string,
        icon_id: string,
        inventory_cap: string,
        name: string,
        'name.de': string,
        'name.en': string,
        'name.es': string,
        'name.fr': string,
        'name.it': string,
        'name.tr': string
    }>;
}
