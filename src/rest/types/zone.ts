import { lang } from '../utils/responseTypes';

export type zone = {
    zone_id: string,
    code: string,
    hex_size: string,
    name: lang,
    description: lang,
    [prop: string]: any,
};
