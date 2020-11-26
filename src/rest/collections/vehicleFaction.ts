import { DefaultCollection } from '../types/collection';
import { vehicleFaction } from '../formats/vehicleFaction';

export interface VehicleFaction extends DefaultCollection {
    collection: 'vehicle_faction';

    format: vehicleFaction;

    conditions: Partial<{
        faction_id: string,
        vehicle_id: string
    }>;
}
