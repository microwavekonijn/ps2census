import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
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

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('experienceRank');

