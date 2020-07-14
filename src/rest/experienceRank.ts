import { defineCensusType } from './Base';
import { lang } from './types/base';

export type experienceRankData = {
    rank: string,
    xp_max: string,
    vs: {
        title: lang,
        image_set_id: string,
        image_id: string,
    },
    vs_image_path: string,
    nc: {
        title: lang,
        image_set_id: string,
        image_id: string,
    },
    nc_image_path: string,
    tr: {
        title: lang,
        image_set_id: string,
        image_id: string,
    },
    tr_image_path: string,
};

export type experienceRankQuery = Partial<experienceRankData>

export default defineCensusType<experienceRankQuery, experienceRankData[]>('experience_rank');
