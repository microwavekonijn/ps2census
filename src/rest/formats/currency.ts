import { Lang } from '../types/response';

export interface currency  {
    currency_id: string;
    name: Lang;
    icon_id: string;
    inventory_cap: string;
    [prop: string]: unknown;
}
