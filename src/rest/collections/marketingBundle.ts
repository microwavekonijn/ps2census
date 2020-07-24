import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import marketingBundle from '../types/marketingBundle';

export type typeData = marketingBundle

export type query = {
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
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('marketing_bundle');
