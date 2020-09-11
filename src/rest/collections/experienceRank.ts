import { requestFactory } from '../utils/requestHelpers';
import experienceRank from '../types/experienceRank';

export type typeData = experienceRank;

export type query = Partial<{
    nc: string,
    'nc.image_id': string,
    'nc.image_set_id': string,
    'nc.title': string,
    'nc.title.de': string,
    'nc.title.en': string,
    'nc.title.es': string,
    'nc.title.fr': string,
    'nc.title.it': string,
    'nc.title.tr': string,
    nc_image_path: string,
    rank: string,
    tr: string,
    'tr.image_id': string,
    'tr.image_set_id': string,
    'tr.title': string,
    'tr.title.de': string,
    'tr.title.en': string,
    'tr.title.es': string,
    'tr.title.fr': string,
    'tr.title.it': string,
    'tr.title.tr': string,
    tr_image_path: string,
    vs: string,
    'vs.image_id': string,
    'vs.image_set_id': string,
    'vs.title': string,
    'vs.title.de': string,
    'vs.title.en': string,
    'vs.title.es': string,
    'vs.title.fr': string,
    'vs.title.it': string,
    'vs.title.tr': string,
    vs_image_path: string,
    xp_max: string
}>;

export default requestFactory<'experience_rank'>('experience_rank');
