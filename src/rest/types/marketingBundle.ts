import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
    marketing_bundle_id: string,
    name: lang,
    description: lang,
    image_id: string,
    station_cash_price: string,
    release_time: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('marketingBundle');

