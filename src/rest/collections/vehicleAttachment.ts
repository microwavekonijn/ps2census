import { DefaultCollection } from '../types/collection';
import { vehicleAttachment } from '../formats/vehicleAttachment';

export interface VehicleAttachment extends DefaultCollection {
    collection: 'vehicle_attachment';

    format: vehicleAttachment;

    conditions: Partial<{
        description: string,
        faction_id: string,
        item_id: string,
        slot_id: string,
        vehicle_id: string
    }>;
}
