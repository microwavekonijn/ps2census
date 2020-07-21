import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    projectile_flight_type_id: string,
    description: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('projectileFlightType');
