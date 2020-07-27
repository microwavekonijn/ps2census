import { requestFactory } from '../utils/Helpers';
import vehicleAttachment from '../types/vehicleAttachment';

export type typeData = vehicleAttachment;

export type query = Partial<{
    description: string,
    faction_id: string,
    item_id: string,
    slot_id: string,
    vehicle_id: string
}>;

export type resolve = never;

export default requestFactory<'vehicle_attachment'>('vehicle_attachment');
