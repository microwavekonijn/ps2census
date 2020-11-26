import { DefaultCollection } from '../types/collection';
import { facilityLink } from '../formats/facilityLink';

export interface FacilityLink extends DefaultCollection {
    collection: 'facility_link';

    format: facilityLink;

    conditions: Partial<{
        description: string,
        facility_id_a: string,
        facility_id_b: string,
        zone_id: string
    }>;
}
