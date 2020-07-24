import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import marketingBundleWith1Item from '../types/marketingBundleWith1Item';

export type typeData = marketingBundleWith1Item;

export type query = Partial<{
    cert_price: string,
    item_id: string,
    item_quantity: string,
    marketing_bundle_id: string,
    release_time: string,
    station_cash_price: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('marketing_bundle_with_1_item');
