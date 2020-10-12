import { requestFactory } from '../utils/requestHelpers';

export { facilityLink as facilityLinkFormat } from '../formats/facilityLink';

export type facilityLinkQuery = Partial<{
    description: string,
    facility_id_a: string,
    facility_id_b: string,
    zone_id: string
}>;

export const facilityLink = requestFactory<'facility_link'>('facility_link');
