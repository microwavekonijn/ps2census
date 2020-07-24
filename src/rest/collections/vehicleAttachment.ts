import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import vehicleAttachment from '../types/vehicleAttachment';

export type typeData = vehicleAttachment;

export type query = {
    description: string,
    faction_id: string,
    item_id: string,
    slot_id: string,
    vehicle_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('vehicle_attachment');
