import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

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

export type query = {
    after: string,
    before: string,
    id: string,
    type: string,
    world_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('worldEvent');
