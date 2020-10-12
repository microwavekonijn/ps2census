import { requestFactory } from '../utils/requestHelpers';

export { facilityType as facilityTypeFormat } from '../formats/facilityType';

export type facilityTypeQuery = Partial<{
    description: string,
    facility_type_id: string
}>;

export const facilityType = requestFactory('facility_type');
