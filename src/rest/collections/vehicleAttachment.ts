import { requestFactory } from '../utils/requestHelpers';
import { vehicleAttachment } from '../types/vehicleAttachment';

export type typeData = vehicleAttachment;

export type query = Partial<{
    description: string,
    faction_id: string,
    item_id: string,
    slot_id: string,
    vehicle_id: string
}>;

export const vehicleAttachment = requestFactory<'vehicle_attachment'>('vehicle_attachment');
