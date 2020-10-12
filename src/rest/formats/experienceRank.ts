import { lang } from '../types/response';

export type experienceRank = {
    rank: string,
    xp_max: string,
    vs: {
        title: lang,
        image_set_id: string,
        image_id: string,
        [prop: string]: any,
    },
    vs_image_path: string,
    nc: {
        title: lang,
        image_set_id: string,
        image_id: string,
        [prop: string]: any,
    },
    nc_image_path: string,
    tr: {
        title: lang,
        image_set_id: string,
        image_id: string,
        [prop: string]: any,
    },
    tr_image_path: string,
    [prop: string]: any,
};
