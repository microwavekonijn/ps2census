import { requestFactory } from '../utils/Helpers';
import facilityType from '../types/facilityType';

export type typeData = facilityType;

export type query = Partial<{
    description: string,
    facility_type_id: string
}>;

export type resolve = never;

export default requestFactory<'facility_type'>('facility_type');
