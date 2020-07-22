import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    zone_id: string,
    facility_id_a: string,
    facility_id_b: string,
};

export type query = {
    description: string,
    facility_id_a: string,
    facility_id_b: string,
    zone_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('facilityLink');
