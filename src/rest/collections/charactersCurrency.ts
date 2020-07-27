import { requestFactory } from '../utils/Helpers';
import characterCurrency from '../types/characterCurrency';

export type typeData = characterCurrency;

export type query = Partial<{
    character_id: string,
    currency_id: string,
    currency_name: string,
    prestige_currency: string,
    quantity: string
}>;

export type resolve = never;

export default requestFactory<'characters_currency'>('characters_currency');
