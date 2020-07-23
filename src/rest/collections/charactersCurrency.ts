import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    character_id: string,
    currency_id: string,
    currency_name: string,
    quantity: string,
    prestige_currency: string,
};

export type query = {
    character_id: string,
    currency_id: string,
    currency_name: string,
    prestige_currency: string,
    quantity: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('characters_currency');
