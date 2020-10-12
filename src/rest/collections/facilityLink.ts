import { requestFactory } from '../utils/requestHelpers';
import { facilityLink } from '../types/facilityLink';

export type typeData = facilityLink;

export type query = Partial<{
    description: string,
    facility_id_a: string,
    facility_id_b: string,
    zone_id: string
}>;

export const facilityLink = requestFactory<'facility_link'>('facility_link');
