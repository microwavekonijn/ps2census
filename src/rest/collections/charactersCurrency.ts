import { requestFactory } from '../utils/requestHelpers';
import characterCurrency from '../types/characterCurrency';

export type typeData = characterCurrency;

export type query = Partial<{
    character_id: string,
    currency_id: string,
    currency_name: string,
    prestige_currency: string,
    quantity: string
}>;

export default requestFactory<'characters_currency'>('characters_currency');
