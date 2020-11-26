import { Lang } from '../types/response';

export interface marketingBundle  {
    marketing_bundle_id: string;
    name: Lang;
    description: Lang;
    image_id: string;
    station_cash_price: string;
    cert_price: string;
    release_time: string;
    [prop: string]: unkown;
}
