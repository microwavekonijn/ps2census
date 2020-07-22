import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
    currency_id: string,
    name: lang,
    icon_id: string,
    inventory_cap: string,
};

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
