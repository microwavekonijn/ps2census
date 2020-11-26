import { Lang } from '../types/response';

export interface empireScore  {
    tracker_name: string;
    tracker_description: string;
    start_date: string;
    start_time: string;
    end_date: string;
    end_time: string;
    name: Lang;
    [prop: string]: unknown;
}
