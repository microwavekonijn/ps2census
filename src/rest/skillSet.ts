import { defineCensusType } from './Base';
import { lang } from './types/base';

export type skillSetData = {
    skill_set_id: string,
    name: lang,
    description: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
};

export type skillSetQuery = Partial<skillSetData>

export default defineCensusType<skillSetQuery, skillSetData[]>('skill_set');
