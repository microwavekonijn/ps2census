import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    item_id: string,
    vehicle_id: string,
    faction_id: string,
    description: string,
    slot_id: string,
};

export type query = {
    description: string,
    faction_id: string,
    item_id: string,
    slot_id: string,
    vehicle_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('vehicleAttachment');
