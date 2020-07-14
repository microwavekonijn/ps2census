import { defineCensusType } from '../Base';

export type vehicleAttachmentData = {
    item_id: string,
    vehicle_id: string,
    faction_id: string,
    description: string,
    slot_id: string,
};

export type vehicleAttachmentQuery = Partial<vehicleAttachmentData>

export default defineCensusType<vehicleAttachmentQuery, vehicleAttachmentData[]>('vehicle_attachment');
