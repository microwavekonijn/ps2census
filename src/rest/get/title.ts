import { defineCensusType } from '../get';
import { lang } from '../types/lang';

export type titleData = {
    title_id: string,
    name: lang,
};

export type titleQuery = Partial<titleData>

export default defineCensusType<titleQuery, titleData[]>('title');
