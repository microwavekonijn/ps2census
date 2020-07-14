import { defineCensusType } from './Base';
import { lang } from './types/base';

export type currencyData = {
    currency_id: string,
    name: lang,
    icon_id: string,
    inventory: string
};

export default defineCensusType<Partial<currencyData>, currencyData[]>('currency');
