import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import currency from '../types/currency';

export type typeData = currency;

export type query = {
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
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('currency');
