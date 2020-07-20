import { defineCensusType } from '../get';
import { lang } from '../types/lang';

export type currencyData = {
    currency_id: string,
    name: lang,
    icon_id: string,
    inventory_cap: string,
};

export type currencyQuery = Partial<currencyData>

export default defineCensusType<currencyQuery, currencyData[]>('currency');
