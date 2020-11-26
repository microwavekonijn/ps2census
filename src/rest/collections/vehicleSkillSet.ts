import { DefaultCollection } from '../types/collection';
import { vehicleSkillSet } from '../formats/vehicleSkillSet';

export interface VehicleSkillSet extends DefaultCollection {
    collection: 'vehicle_skill_set';

    format: vehicleSkillSet;

    conditions: Partial<{
        display_index: string,
        faction_id: string,
        skill_set_id: string,
        vehicle_id: string
    }>;
}
