import { requestFactory } from '../utils/requestHelpers';
import { vehicleFaction } from '../types/vehicleFaction';

export type typeData = vehicleFaction;

export type query = Partial<{
    faction_id: string,
    vehicle_id: string
}>;

export const vehicleFaction = requestFactory<'vehicle_faction'>('vehicle_faction');
