import { Lang } from '../types/response';

export interface zone  {
    zone_id: string;
    code: string;
    hex_size: string;
    name: Lang;
    description: Lang;
    [prop: string]: unknown;
}
