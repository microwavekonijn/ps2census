import { requestFactory } from '../utils/requestHelpers';

export { vehicleSkillSet as vehicleSkillSetFormat } from '../formats/vehicleSkillSet';

export type vehicleSkillSetQuery = Partial<{
    display_index: string,
    faction_id: string,
    skill_set_id: string,
    vehicle_id: string
}>;

export const vehicleSkillSet = requestFactory('vehicle_skill_set');
