import { defineCensusType } from './Base';
import { lang } from './types/base';

export type worldData = {
    world_id: string,
    state: string,
    name: lang,
};

export type worldQuery = Partial<worldData>

export default defineCensusType<worldQuery, worldData[]>('world');
