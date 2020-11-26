import { DefaultCollection } from '../types/collection';
import { facilityType } from '../formats/facilityType';

export interface FacilityType extends DefaultCollection {
    collection: 'facility_type';

    format: facilityType;

    conditions: Partial<{
        description: string,
        facility_type_id: string
    }>;
}
