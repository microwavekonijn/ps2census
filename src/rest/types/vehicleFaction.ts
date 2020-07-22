import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    vehicle_id: string,
    faction_id: string,
};

export type query = {
    faction_id: string,
    vehicle_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('vehicleFaction');
