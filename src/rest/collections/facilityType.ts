import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import facilityType from '../types/facilityType';

export type typeData = facilityType;

export type query = {
    description: string,
    facility_type_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('facility_type');
