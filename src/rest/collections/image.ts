import { requestFactory } from '../utils/requestHelpers';

export { image as imageFormat } from '../formats/image';

export type imageQuery = Partial<{
    description: string,
    image_id: string,
    path: string
}>;

export const image = requestFactory<'image'>('image');
