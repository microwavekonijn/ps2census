import { requestFactory } from '../utils/requestHelpers';

export { vehicleFaction as vehicleFactionFormat } from '../formats/vehicleFaction';

export type vehicleFactionQuery = Partial<{
    faction_id: string,
    vehicle_id: string
}>;

export const vehicleFaction = requestFactory('vehicle_faction');
