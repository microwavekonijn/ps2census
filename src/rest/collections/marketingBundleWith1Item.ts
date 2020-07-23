import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

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

export default requestFactory<operations, query, typeData[], commands, resolve>('marketing_bundle_with_1_item');
