import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    projectile_flight_type_id: string,
    description: string,
};

export type query = {
    description: string,
    projectile_flight_type_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('projectileFlightType');
