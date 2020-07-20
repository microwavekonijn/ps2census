import { defineCensusType } from '../get';
import { lang } from '../types/lang';

export type zoneData = {
    zone_id: string,
    code: string,
    hex_size: string,
    name: lang,
    description: lang,
};

export type zoneQuery = Partial<zoneData>

export default defineCensusType<zoneQuery, zoneData[]>('zone');
