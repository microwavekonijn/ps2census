import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    vehicle_id: string,
    skill_set_id: string,
    faction_id: string,
    display_index: string,
};

export type query = {
    display_index: string,
    faction_id: string,
    skill_set_id: string,
    vehicle_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('vehicle_skill_set');
