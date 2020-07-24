import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import vehicleFaction from '../types/vehicleFaction';

export type typeData = vehicleFaction;

export type query = Partial<{
    faction_id: string,
    vehicle_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('vehicle_faction');
