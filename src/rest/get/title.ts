import { defineCensusType } from '../Base';
import { lang } from '../types/base';

export type titleData = {
    title_id: string,
    name: lang,
};

export type titleQuery = Partial<titleData>

export default defineCensusType<titleQuery, titleData[]>('title');
