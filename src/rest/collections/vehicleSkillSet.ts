import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import vehicleSkillSet from '../types/vehicleSkillSet';

export type typeData = vehicleSkillSet;

export type query = Partial<{
    display_index: string,
    faction_id: string,
    skill_set_id: string,
    vehicle_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('vehicle_skill_set');
