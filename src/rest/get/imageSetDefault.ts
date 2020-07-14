import { defineCensusType } from '../Base';

export type imageSetDefaultData = {
    image_set_id: string,
    image_id: string,
    description: string,
    type_id: string,
    type_description: string,
    image_path: string,
};

export type imageSetDefaultQuery = Partial<imageSetDefaultData>

export default defineCensusType<imageSetDefaultQuery, imageSetDefaultData[]>('image_set_default');
