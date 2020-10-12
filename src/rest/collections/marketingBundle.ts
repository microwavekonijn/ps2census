import { requestFactory } from '../utils/requestHelpers';

export { marketingBundle as marketingBundleFormat } from '../formats/marketingBundle';

export type marketingBundleQuery = Partial<{
    cert_price: string,
    description: string,
    'description.de': string,
    'description.en': string,
    'description.es': string,
    'description.fr': string,
    'description.it': string,
    'description.tr': string,
    image_id: string,
    marketing_bundle_id: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    release_time: string,
    station_cash_price: string
}>;

export const marketingBundle = requestFactory<'marketing_bundle'>('marketing_bundle');
