import { lang } from '../types/response';

export type currency = {
    currency_id: string,
    name: lang,
    icon_id: string,
    inventory_cap: string,
    [prop: string]: any,
};
