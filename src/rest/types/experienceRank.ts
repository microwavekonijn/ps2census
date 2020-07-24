import { lang } from '../utils/Types';

export default experienceRank;

type experienceRank = {
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
