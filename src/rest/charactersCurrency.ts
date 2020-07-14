import { defineCensusType } from './Base';

export type charactersCurrencyData = {
    character_id: string,
    currency_id: string,
    currency_name: string,
    quantity: string,
    prestige_currency: string
};

export default defineCensusType<Partial<charactersCurrencyData>, charactersCurrencyData[]>('characters_currency');
