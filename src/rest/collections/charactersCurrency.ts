import { requestFactory } from '../utils/requestHelpers';

export { characterCurrency as charactersCurrencyFormat } from '../formats/characterCurrency';

export type charactersCurrencyQuery = Partial<{
    character_id: string,
    currency_id: string,
    currency_name: string,
    prestige_currency: string,
    quantity: string
}>;

export const charactersCurrency = requestFactory('characters_currency');
