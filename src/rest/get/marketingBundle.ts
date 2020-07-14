import { defineCensusType } from '../Base';
import { lang } from '../types/base';

export type marketingBundleData = {
    marketing_bundle_id: string,
    name: lang,
    description: lang,
    image_id: string,
    station_cash_price: string,
    release_time: string,
};

export type marketingBundleQuery = Partial<marketingBundleData>

export default defineCensusType<marketingBundleQuery, marketingBundleData[]>('marketing_bundle');
