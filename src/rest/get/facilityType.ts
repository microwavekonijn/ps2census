import { defineCensusType } from '../get';

export type facilityTypeData = {
    facility_type_id: string,
    description: string,
};

export type facilityTypeQuery = Partial<facilityTypeData>

export default defineCensusType<facilityTypeQuery, facilityTypeData[]>('facility_type');
