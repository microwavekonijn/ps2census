import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
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

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('vehicle');

