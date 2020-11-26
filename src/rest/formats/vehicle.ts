import { Lang } from '../types/response';

export interface vehicle  {
    vehicle_id: string;
    name: Lang;
    description: Lang;
    type_id: string;
    type_name: string;
    cost_resource_id: string;
    image_set_id: string;
    image_id: string;
    image_path: string;
    [prop: string]: unknown;
}
