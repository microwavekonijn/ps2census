import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    facility_id: string,
    faction_old: string,
    faction_new: string,
    duration_held: string,
    objective_id: string,
    timestamp: string,
    zone_id: string,
    world_id: string,
    event_type: string,
    table_type: string,
    outfit_id: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('worldEvent');

