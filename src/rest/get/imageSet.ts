import { defineCensusType } from '../get';

export type imageSetData = {
    image_set_id: string,
    image_id: string,
    description: string,
    type_id: string,
    type_description: string,
    image_path: string,
};

export type imageSetQuery = Partial<imageSetData>

export default defineCensusType<imageSetQuery, imageSetData[]>('image_set');
