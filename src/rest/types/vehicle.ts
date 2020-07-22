import { requestFactory } from '../utils/Helpers';
import { commands, lang, operations } from '../utils/Types';

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

export type query = {
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
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('vehicle');
