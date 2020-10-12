import { requestFactory } from '../utils/requestHelpers';
import { vehicleSkillSet } from '../types/vehicleSkillSet';

export type typeData = vehicleSkillSet;

export type query = Partial<{
    display_index: string,
    faction_id: string,
    skill_set_id: string,
    vehicle_id: string
}>;

export const vehicleSkillSet = requestFactory<'vehicle_skill_set'>('vehicle_skill_set');
