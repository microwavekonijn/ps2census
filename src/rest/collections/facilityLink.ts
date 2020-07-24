import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import facilityLink from '../types/facilityLink';

export type typeData = facilityLink;

export type query = Partial<{
    description: string,
    facility_id_a: string,
    facility_id_b: string,
    zone_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('facility_link');
