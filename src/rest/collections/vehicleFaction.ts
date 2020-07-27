import { requestFactory } from '../utils/Helpers';
import vehicleFaction from '../types/vehicleFaction';

export type typeData = vehicleFaction;

export type query = Partial<{
    faction_id: string,
    vehicle_id: string
}>;

export type resolve = never;

export default requestFactory<'vehicle_faction'>('vehicle_faction');
