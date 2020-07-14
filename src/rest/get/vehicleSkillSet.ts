import { defineCensusType } from '../Base';

export type vehicleSkillSetData = {
    vehicle_id: string,
    skill_set_id: string,
    faction_id: string,
    display_index: string,
};

export type vehicleSkillSetQuery = Partial<vehicleSkillSetData>

export default defineCensusType<vehicleSkillSetQuery, vehicleSkillSetData[]>('vehicle_skill_set');
