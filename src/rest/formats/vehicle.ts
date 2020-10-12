import { lang } from '../utils/responseTypes';

export type vehicle = {
    vehicle_id: string,
    name: lang,
    description: lang,
    type_id: string,
    type_name: string,
    cost_resource_id: string,
    image_set_id: string,
    image_id: string,
    image_path: string,
    [prop: string]: any,
};
