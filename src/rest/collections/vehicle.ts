import { DefaultCollection } from '../types/collection';
import { vehicle } from '../formats/vehicle';

export interface Vehicle extends DefaultCollection {
    collection: 'vehicle';

    format: vehicle;

    conditions: Partial<{
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
}
