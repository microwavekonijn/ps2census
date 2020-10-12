import { requestFactory } from '../utils/requestHelpers';
import { vehicle } from '../types/vehicle';

export type typeData = vehicle;

export type query = Partial<{
    cost: string,
    cost_resource_id: string,
    description: string,
    'description.de': string,
    'description.en': string,
    'description.es': string,
    'description.fr': string,
    'description.it': string,
    'description.tr': string,
    image_id: string,
    image_path: string,
    image_set_id: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    type_id: string,
    type_name: string,
    vehicle_id: string
}>;

export const vehicle = requestFactory<'vehicle'>('vehicle');
