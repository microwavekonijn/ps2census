import { defineCensusType } from '../Base';

export type imageData = {
    image_id: string,
    path: string,
};

export type imageQuery = Partial<imageData>

export default defineCensusType<imageQuery, imageData[]>('image');
