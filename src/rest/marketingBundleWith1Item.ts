import { defineCensusType } from './Base';

export type marketingBundleWith1ItemData = {
    marketing_bundle_id: string,
    item_id: string,
    item_quantity: string,
    station_cash_price: string,
    release_time: string,
};

export type marketingBundleWith1ItemQuery = Partial<marketingBundleWith1ItemData>

export default defineCensusType<marketingBundleWith1ItemQuery, marketingBundleWith1ItemData[]>('marketing_bundle_with_1_item');
