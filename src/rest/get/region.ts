import { defineCensusType } from '../Base';
import { lang } from '../types/base';

export type regionData = {
    region_id: string,
    zone_id: string,
    initial_faction_id: string,
    name: lang,
};

export type regionQuery = Partial<regionData>

export default defineCensusType<regionQuery, regionData[]>('region');
