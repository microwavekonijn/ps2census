import { requestFactory } from '../utils/requestHelpers';

export { currency as currencyFormat } from '../formats/currency';

export type currencyQuery = Partial<{
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

export const currency = requestFactory('currency');
