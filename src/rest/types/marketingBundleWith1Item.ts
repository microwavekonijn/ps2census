import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    marketing_bundle_id: string,
    item_id: string,
    item_quantity: string,
    station_cash_price: string,
    release_time: string,
};

export type query = {
    cert_price: string,
    item_id: string,
    item_quantity: string,
    marketing_bundle_id: string,
    release_time: string,
    station_cash_price: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('marketingBundleWith1Item');
