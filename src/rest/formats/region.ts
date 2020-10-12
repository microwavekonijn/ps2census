import { lang } from '../types/response';

export type region = {
    region_id: string,
    zone_id: string,
    initial_faction_id: string,
    name: lang,
    [prop: string]: any,
};
