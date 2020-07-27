import { requestFactory } from '../utils/Helpers';
import facilityLink from '../types/facilityLink';

export type typeData = facilityLink;

export type query = Partial<{
    description: string,
    facility_id_a: string,
    facility_id_b: string,
    zone_id: string
}>;

export type resolve = never;

export default requestFactory<'facility_link'>('facility_link');
