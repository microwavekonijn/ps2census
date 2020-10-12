import { requestFactory } from '../utils/requestHelpers';
import { facilityType } from '../types/facilityType';

export type typeData = facilityType;

export type query = Partial<{
    description: string,
    facility_type_id: string
}>;

export const facilityType = requestFactory<'facility_type'>('facility_type');
