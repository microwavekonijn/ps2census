import { defineCensusType } from '../Base';
import { lang } from '../types/base';

export type vehicleData = {
    vehicle_id: string,
    name: lang,
    description: lang,
    type_id: string,
    type_name: string,
    cost_resource_id: string,
    image_set_id: string,
    image_id: string,
    image_path: string,
};

export type vehicleQuery = Partial<vehicleData>

export default defineCensusType<vehicleQuery, vehicleData[]>('vehicle');
