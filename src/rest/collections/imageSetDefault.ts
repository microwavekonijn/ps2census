import { requestFactory } from '../utils/requestHelpers';

export { imageSetDefault as imageSetDefaultFormat } from '../formats/imageSetDefault';

export type imageSetDefaultQuery = Partial<{
    description: string,
    image_id: string,
    image_path: string,
    image_set_id: string,
    type_description: string,
    type_id: string
}>;

export const imageSetDefault = requestFactory('image_set_default');
