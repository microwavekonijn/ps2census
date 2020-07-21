import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    vehicle_id: string,
    skill_set_id: string,
    faction_id: string,
    display_index: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('vehicleSkillSet');

