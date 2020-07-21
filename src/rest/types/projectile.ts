import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    projectile_id: string,
    projectile_flight_type_id: string,
    speed: string,
    lifespan: string,
    drag: string,
    gravity: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('projectile');

