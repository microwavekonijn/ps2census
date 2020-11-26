import { Lang } from '../types/response';

export interface experienceRank  {
    rank: string;
    xp_max: string;
    vs: {
        title: Lang;
        image_set_id: string;
        image_id: string;
        [prop: string]: unkown;
    };
    vs_image_path: string;
    nc: {
        title: Lang;
        image_set_id: string;
        image_id: string;
        [prop: string]: unkown;
    };
    nc_image_path: string;
    tr: {
        title: Lang;
        image_set_id: string;
        image_id: string;
        [prop: string]: unkown;
    };
    tr_image_path: string;
    [prop: string]: unkown;
}
