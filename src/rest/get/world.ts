import { defineCensusType } from '../get';
import { lang } from '../types/lang';

export type worldData = {
    world_id: string,
    state: string,
    name: lang,
};

export type worldQuery = Partial<worldData>

export default defineCensusType<worldQuery, worldData[]>('world');
