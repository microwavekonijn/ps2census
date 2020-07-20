import { defineCensusType } from '../get';

export type facilityLinkData = {
    zone_id: string,
    facility_id_a: string,
    facility_id_b: string,
};

export type facilityLinkQuery = Partial<facilityLinkData>

export default defineCensusType<facilityLinkQuery, facilityLinkData[]>('facility_link');
