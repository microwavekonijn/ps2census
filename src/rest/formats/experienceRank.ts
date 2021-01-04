import { Lang } from '../types/response';

export interface experienceRank {
    rank: string;
    xp_max: string;
    vs: {
        title: Lang;
        image_set_id: string;
        image_id: string;
    };
    vs_image_path: string;
    nc: {
        title: Lang;
        image_set_id: string;
        image_id: string;
    };
    nc_image_path: string;
    tr: {
        title: Lang;
        image_set_id: string;
        image_id: string;
    };
    tr_image_path: string;
}
