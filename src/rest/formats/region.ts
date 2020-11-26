import { Lang } from '../types/response';

export interface region  {
    region_id: string;
    zone_id: string;
    initial_faction_id: string;
    name: Lang;
    [prop: string]: unkown;
}
