import { requestFactory } from '../utils/requestHelpers';

export { marketingBundleWith1Item as marketingBundleWith1ItemFormat } from '../formats/marketingBundleWith1Item';

export type marketingBundleWith1ItemQuery = Partial<{
    cert_price: string,
    item_id: string,
    item_quantity: string,
    marketing_bundle_id: string,
    release_time: string,
    station_cash_price: string
}>;

export const marketingBundleWith1_item = requestFactory<'marketing_bundle_with_1_item'>('marketing_bundle_with_1_item');
